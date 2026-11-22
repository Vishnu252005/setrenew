import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { getAdminFirestore } from '@/lib/firebaseAdmin';

export interface LeadPayload {
  id: string;
  gymName: string;
  ownerName: string;
  phone: string;
  city: string;
  memberCount: string;
  currentSystem?: string;
  primaryPainPoint?: string;
  monthlyFeeRange?: string;
  source: string;
  status: string;
  createdAt: string;
  ip?: string;
  userAgent?: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      gymName,
      ownerName,
      phone,
      city,
      memberCount,
      currentSystem,
      primaryPainPoint,
      monthlyFeeRange,
    } = body;

    if (!gymName || !ownerName || !phone) {
      return NextResponse.json(
        { error: 'Please provide Gym Name, Owner Name, and WhatsApp Number.' },
        { status: 400 }
      );
    }

    const cleanPhone = phone.trim().replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { error: 'Please provide a valid 10-digit WhatsApp number.' },
        { status: 400 }
      );
    }

    const leadId = `sr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const nowIso = new Date().toISOString();

    const leadData: LeadPayload = {
      id: leadId,
      gymName: gymName.trim(),
      ownerName: ownerName.trim(),
      phone: cleanPhone,
      city: (city || 'India').trim(),
      memberCount: memberCount || '100-250',
      currentSystem: currentSystem || 'Not Specified',
      primaryPainPoint: primaryPainPoint || 'Not Specified',
      monthlyFeeRange: monthlyFeeRange || 'Not Specified',
      source: 'setrenew_web',
      status: 'new_lead',
      createdAt: nowIso,
      ip: req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown',
      userAgent: req.headers.get('user-agent') || 'unknown',
    };

    console.log('[SETRENEW_LEAD_SUBMISSION]', JSON.stringify(leadData));

    // 1. Primary: Save to Firebase Firestore (vihaya-app -> setrenew_leads)
    let savedToFirestore = false;
    const db = getAdminFirestore();

    if (db) {
      try {
        // Query to check if phone number already registered
        const existingQuery = await db
          .collection('setrenew_leads')
          .where('phone', '==', cleanPhone)
          .limit(1)
          .get();

        if (!existingQuery.empty) {
          const existingDoc = existingQuery.docs[0];
          await existingDoc.ref.update({
            gymName: leadData.gymName,
            ownerName: leadData.ownerName,
            city: leadData.city,
            memberCount: leadData.memberCount,
            currentSystem: leadData.currentSystem,
            primaryPainPoint: leadData.primaryPainPoint,
            monthlyFeeRange: leadData.monthlyFeeRange,
            lastUpdated: nowIso,
          });

          return NextResponse.json({
            success: true,
            message: 'Your spot is already active! We updated your gym details.',
            position: 1,
            leadId: existingDoc.id,
          });
        }

        // Add new document
        await db.collection('setrenew_leads').doc(leadId).set(leadData);
        savedToFirestore = true;
      } catch (firestoreErr) {
        console.error('[FirebaseAdmin] Failed to save lead in Firestore:', firestoreErr);
      }
    } else {
      console.warn('[FirebaseAdmin] Firestore instance unavailable. Using fallback storage.');
    }

    // 2. Fallback: local/temp file storage
    try {
      const dataDir = process.env.VERCEL ? '/tmp' : path.join(process.cwd(), 'data');
      const filePath = path.join(dataDir, 'waitlist.json');

      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      let entries: any[] = [];
      if (fs.existsSync(filePath)) {
        try {
          entries = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        } catch {
          entries = [];
        }
      }

      entries.push({ ...leadData, savedToFirestore });
      fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));
    } catch (fsErr) {
      console.warn('[FallbackStorage] Could not write to filesystem:', fsErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Spot reserved successfully!',
      position: Math.floor(Math.random() * 15) + 12,
      leadId,
    });
  } catch (error: any) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    );
  }
}

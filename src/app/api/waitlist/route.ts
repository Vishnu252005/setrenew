import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface WaitlistEntry {
  id: string;
  gymName: string;
  ownerName: string;
  phone: string;
  city: string;
  memberCount: string;
  createdAt: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { gymName, ownerName, phone, city, memberCount } = body;

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

    // Use /tmp on Vercel serverless, otherwise local data dir
    const dataDir = process.env.VERCEL ? '/tmp' : path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'waitlist.json');

    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
    } catch {}

    let entries: WaitlistEntry[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        entries = JSON.parse(fileContent);
      } catch {
        entries = [];
      }
    }

    // Check if already registered
    const existing = entries.find((e) => e.phone === cleanPhone);
    if (existing) {
      return NextResponse.json({
        success: true,
        message: 'You are already on the VIP waitlist!',
        position: entries.findIndex((e) => e.phone === cleanPhone) + 1,
      });
    }

    const newEntry: WaitlistEntry = {
      id: `sr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      gymName: gymName.trim(),
      ownerName: ownerName.trim(),
      phone: cleanPhone,
      city: (city || 'India').trim(),
      memberCount: memberCount || '100-300',
      createdAt: new Date().toISOString(),
    };

    entries.push(newEntry);
    console.log('[SETRENEW_WAITLIST_SIGNUP]', JSON.stringify(newEntry));

    try {
      fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));
    } catch (writeErr) {
      console.warn('Filesystem write warning:', writeErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Spot reserved successfully!',
      position: entries.length || 1,
    });
  } catch (error: any) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    );
  }
}

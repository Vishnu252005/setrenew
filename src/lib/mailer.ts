export interface EmailLeadPayload {
  id: string;
  gymName: string;
  ownerName: string;
  email: string;
  phone: string;
  city: string;
  memberCount: string;
  currentSystem?: string;
  primaryPainPoint?: string;
  monthlyFeeRange?: string;
  createdAt: string;
  position?: number;
}

const ZEPTO_URL = 'https://api.zeptomail.in/v1.1/email';
const FROM_ADDRESS = process.env.MAIL_FROM_ADDRESS || 'setrenew@vihaya.app';
const FROM_NAME = 'Vishnu from SetRenew';
const TEAM_INBOX = 'support@vihaya.app';
const NOTIFY_INBOX = 'vihaya.app@gmail.com';

async function sendZeptoMail(payload: {
  toAddress: string;
  toName: string;
  subject: string;
  htmlContent: string;
  textContent?: string;
  replyTo?: string;
}): Promise<boolean> {
  const token = process.env.ZEPTOMAIL_TOKEN;
  if (!token) {
    console.warn('[Mailer] ZEPTOMAIL_TOKEN not found in environment.');
    return false;
  }

  try {
    const res = await fetch(ZEPTO_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        from: { address: FROM_ADDRESS, name: FROM_NAME },
        to: [{ email_address: { address: payload.toAddress, name: payload.toName } }],
        reply_to: payload.replyTo ? [{ address: payload.replyTo }] : [{ address: TEAM_INBOX }],
        subject: payload.subject,
        htmlbody: payload.htmlContent,
        textbody: payload.textContent || undefined,
        track_clicks: false,
        track_opens: false,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error('[Mailer] ZeptoMail dispatch failed:', JSON.stringify(data));
      return false;
    }

    console.log('[Mailer] Email dispatched successfully to', payload.toAddress);
    return true;
  } catch (err) {
    console.error('[Mailer] Error sending email via ZeptoMail:', err);
    return false;
  }
}

/**
 * 1. Primary-Inbox Optimized Waitlist Confirmation Email
 * Engineered to avoid Gmail "Promotions" tab by adhering to:
 * - RFC 2046 Multipart (HTML + Plaintext)
 * - Conversational human tone from "Vishnu from SetRenew"
 * - High text-to-markup ratio (no marketing banners or coupon tags)
 * - Anti-promotions subject line
 */
export async function sendApplicantWelcomeEmail(lead: EmailLeadPayload): Promise<boolean> {
  if (!lead.email || !lead.email.includes('@')) {
    return false;
  }

  const spotNum = lead.position || 1131;
  const spotFormatted = Number(spotNum).toLocaleString();

  const textContent = `Hi ${lead.ownerName},

Thanks for registering ${lead.gymName} for the SetRenew early access waitlist.

Your spot (#${spotFormatted}) is confirmed in our priority queue. You have joined 1,000+ gym owners across India preparing to automate member renewals on WhatsApp.

What happens next:
1. Priority Cohorts: We onboard gyms in dedicated cohorts of 10 to ensure a white-glove setup.
2. Launch Notification: As soon as this feature goes live for your batch, we will send an email directly to this address with your access link so you can start using it immediately.
3. WhatsApp Onboarding: Our team will connect with you on WhatsApp to import your member list in 60 seconds with 30 days of complimentary access.

If you have any questions or need custom setup assistance, simply reply directly to this email. I read every message.

Best regards,
Vishnu
SetRenew Team
https://setrenew.vihaya.app/`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>SetRenew Waitlist Confirmation</title>
</head>
<body style="margin: 0; padding: 24px 16px; background-color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="max-width: 520px; margin: 0 auto; padding: 28px 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
    
    <!-- Clean Minimalist Header -->
    <div style="padding-bottom: 20px; border-bottom: 1px solid #f1f5f9; margin-bottom: 24px;">
      <span style="display: inline-block; background-color: #16a34a; color: #ffffff; padding: 4px 10px; border-radius: 6px; font-weight: 800; font-size: 13px; letter-spacing: 0.04em;">SR</span>
      <span style="font-size: 17px; font-weight: 700; color: #0f172a; margin-left: 8px; vertical-align: middle;">SetRenew</span>
    </div>

    <p style="font-size: 15px; margin: 0 0 16px; color: #0f172a;">
      Hi ${lead.ownerName},
    </p>

    <p style="font-size: 14px; margin: 0 0 16px; color: #334155;">
      Thanks for signing up for the SetRenew priority waitlist for <strong>${lead.gymName}</strong>. You have joined 1,000+ gym owners across India who are moving away from manual registers and awkward payment follow-ups.
    </p>

    <!-- Priority Badge Box -->
    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px 18px; margin: 20px 0;">
      <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #64748b; letter-spacing: 0.05em; margin-bottom: 4px;">Waitlist Status</div>
      <div style="font-size: 15px; font-weight: 700; color: #16a34a;">
        Spot #${spotFormatted} Confirmed &middot; Batch 1 Queue
      </div>
      <div style="font-size: 12px; color: #64748b; margin-top: 4px;">
        ${lead.gymName} &middot; ${lead.city} &middot; ${lead.memberCount}
      </div>
    </div>

    <p style="font-size: 14px; margin: 0 0 12px; font-weight: 600; color: #0f172a;">
      What happens next:
    </p>

    <ul style="margin: 0 0 24px; padding-left: 20px; font-size: 13px; color: #334155; line-height: 1.6;">
      <li style="margin-bottom: 8px;">
        <strong>Priority Cohorts:</strong> We onboard gyms in dedicated cohorts of 10 to ensure a white-glove setup.
      </li>
      <li style="margin-bottom: 8px;">
        <strong>Launch Notification:</strong> As soon as this feature goes live for your batch, we will send an email directly to this address with your access link so you can start using it immediately.
      </li>
      <li style="margin-bottom: 8px;">
        <strong>WhatsApp Onboarding:</strong> Our team will connect with you on WhatsApp to import your member list in 60 seconds. You get 30 days of complimentary collections with 100% direct UPI settlement to your bank.
      </li>
    </ul>

    <p style="font-size: 13px; color: #475569; margin: 20px 0 0; padding-top: 16px; border-top: 1px solid #f1f5f9;">
      If you have any questions or need custom setup assistance, simply reply directly to this email. I read every message.
    </p>

    <div style="margin-top: 18px; font-size: 13px; color: #1e293b;">
      <strong>Vishnu</strong><br>
      <span style="color: #64748b;">SetRenew Team &middot; <a href="https://setrenew.vihaya.app/" style="color: #16a34a; text-decoration: none;">setrenew.vihaya.app</a></span>
    </div>

  </div>
</body>
</html>
  `;

  return sendZeptoMail({
    toAddress: lead.email,
    toName: lead.ownerName,
    subject: `SetRenew early access confirmation — ${lead.gymName}`,
    htmlContent,
    textContent,
  });
}

/**
 * 2. Instant Internal Notification to Team / Founder
 */
export async function sendTeamLeadNotification(lead: EmailLeadPayload): Promise<boolean> {
  const digits = lead.phone.replace(/\D/g, '');
  const waLink = `https://wa.me/91${digits}?text=Hi%20${encodeURIComponent(lead.ownerName)},%20this%20is%20from%20SetRenew!%20Saw%20your%20application%20for%20${encodeURIComponent(lead.gymName)}.`;

  const html = `
<div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 20px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
  <div style="background: #16a34a; color: white; padding: 12px 16px; border-radius: 6px; font-weight: bold; font-size: 15px;">
    New Gym Lead: ${lead.gymName}
  </div>
  <div style="padding: 16px 0;">
    <p style="margin: 6px 0;"><strong>Gym Name:</strong> ${lead.gymName}</p>
    <p style="margin: 6px 0;"><strong>Owner Name:</strong> ${lead.ownerName}</p>
    <p style="margin: 6px 0;"><strong>Phone:</strong> <a href="tel:+91${digits}">+91 ${digits}</a></p>
    <p style="margin: 6px 0;"><strong>Email:</strong> <a href="mailto:${lead.email}">${lead.email}</a></p>
    <p style="margin: 6px 0;"><strong>City:</strong> ${lead.city}</p>
    <p style="margin: 6px 0;"><strong>Members:</strong> ${lead.memberCount}</p>
    <p style="margin: 6px 0;"><strong>Current System:</strong> ${lead.currentSystem || 'Not specified'}</p>
    <p style="margin: 6px 0;"><strong>Primary Pain Point:</strong> ${lead.primaryPainPoint || 'Not specified'}</p>
    <p style="margin: 6px 0;"><strong>Monthly Fee Range:</strong> ${lead.monthlyFeeRange || 'Not specified'}</p>
    <p style="margin: 6px 0; color: #64748b; font-size: 12px;"><strong>Submission Time:</strong> ${lead.createdAt}</p>
  </div>
  <div style="padding-top: 12px; border-top: 1px solid #e2e8f0;">
    <a href="${waLink}" target="_blank" style="display: inline-block; background: #25D366; color: white; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 13px;">
      Open WhatsApp Chat with Owner &rarr;
    </a>
  </div>
</div>
  `;

  // Send to both founder notifications
  await sendZeptoMail({
    toAddress: TEAM_INBOX,
    toName: 'SetRenew Growth Team',
    subject: `New Gym Lead: ${lead.gymName} (${lead.ownerName}) — ${lead.city}`,
    htmlContent: html,
  });

  return sendZeptoMail({
    toAddress: NOTIFY_INBOX,
    toName: 'Vishnu S',
    subject: `New Gym Lead: ${lead.gymName} (${lead.ownerName}) — ${lead.city}`,
    htmlContent: html,
  });
}

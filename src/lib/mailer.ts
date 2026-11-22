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
}

const ZEPTO_URL = 'https://api.zeptomail.in/v1.1/email';
const FROM_ADDRESS = 'no-reply@events.vihaya.app';
const FROM_NAME = 'SetRenew by Vihaya';
const TEAM_INBOX = 'support@vihaya.app';
const NOTIFY_INBOX = 'vihaya.app@gmail.com';

async function sendZeptoMail(payload: {
  toAddress: string;
  toName: string;
  subject: string;
  htmlContent: string;
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
 * 1. Professional Welcome & Confirmation Email to the Gym Owner
 */
export async function sendApplicantWelcomeEmail(lead: EmailLeadPayload): Promise<boolean> {
  if (!lead.email || !lead.email.includes('@')) {
    return false;
  }

  const encodedGym = encodeURIComponent(lead.gymName);
  const waUrl = `https://wa.me/917994263309?text=Hi%20SetRenew%20Team,%20I%20just%20applied%20for%20${encodedGym}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Your SetRenew 30-Day VIP Trial is Confirmed</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
    .container { max-width: 580px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
    .header { background-color: #ffffff; padding: 28px 32px 20px; border-bottom: 1px solid #f1f5f9; }
    .brand-badge { display: inline-flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 800; color: #0f172a; text-decoration: none; }
    .logo-icon { background-color: #16a34a; color: #ffffff; width: 28px; height: 28px; border-radius: 6px; display: inline-block; text-align: center; line-height: 28px; font-size: 15px; }
    .kicker { font-size: 11px; font-weight: 700; color: #16a34a; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 14px; display: block; }
    .content { padding: 32px; }
    h1 { font-size: 22px; font-weight: 800; color: #0f172a; margin: 0 0 14px; line-height: 1.3; }
    p { font-size: 14px; line-height: 1.6; color: #475569; margin: 0 0 16px; }
    .card { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 24px 0; }
    .card-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 12px; }
    .detail-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 13px; border-bottom: 1px solid #edf2f7; }
    .detail-row:last-child { border-bottom: none; }
    .detail-label { color: #64748b; }
    .detail-val { color: #0f172a; font-weight: 600; text-align: right; }
    .step-item { display: flex; gap: 14px; margin-bottom: 16px; }
    .step-num { width: 24px; height: 24px; border-radius: 6px; background-color: #dcfce7; color: #15803d; font-size: 12px; font-weight: 700; text-align: center; line-height: 24px; flex-shrink: 0; }
    .step-text { font-size: 13px; color: #334155; line-height: 1.5; }
    .btn-container { text-align: center; margin: 28px 0 16px; }
    .btn { display: inline-block; background-color: #16a34a; color: #ffffff !important; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; text-decoration: none; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .footer { background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 32px; font-size: 11px; color: #94a3b8; text-align: center; line-height: 1.5; }
    .footer a { color: #64748b; text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="brand-badge">
        <span class="logo-icon">⚡</span>
        <span>SetRenew</span>
      </div>
      <span class="kicker">30-Day VIP Access Reserved</span>
    </div>

    <div class="content">
      <h1>Welcome aboard, ${lead.ownerName}!</h1>
      <p>
        Your 30-day unrestricted free trial for <strong>${lead.gymName}</strong> is officially confirmed. You have joined the forward-thinking gym owners across India running their dues on autopilot.
      </p>

      <div class="card">
        <div class="card-title">Your Registered Gym Profile</div>
        <div class="detail-row">
          <span class="detail-label">Gym Name</span>
          <span class="detail-val">${lead.gymName}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Location / City</span>
          <span class="detail-val">${lead.city}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">WhatsApp Number</span>
          <span class="detail-val">+91 ${lead.phone}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Active Members</span>
          <span class="detail-val">${lead.memberCount} members</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Current Tracking Method</span>
          <span class="detail-val">${lead.currentSystem || 'Standard'}</span>
        </div>
      </div>

      <p style="font-weight: 700; color: #0f172a; margin-bottom: 12px;">Here is what happens next:</p>

      <div class="step-item">
        <div class="step-num">1</div>
        <div class="step-text">
          <strong>WhatsApp Activation:</strong> Our onboarding team will connect with you at <strong>+91 ${lead.phone}</strong> on WhatsApp to configure your automated reminder templates.
        </div>
      </div>

      <div class="step-item">
        <div class="step-num">2</div>
        <div class="step-text">
          <strong>Direct 1-Tap UPI:</strong> We connect your existing gym UPI handle (Google Pay, PhonePe, Paytm). 100% of renewal fees deposit directly into your bank account with 0% gateway commission.
        </div>
      </div>

      <div class="step-item">
        <div class="step-num">3</div>
        <div class="step-text">
          <strong>Member Spreadsheet Import:</strong> Have an existing notebook or Excel list? Send it over to our team, and we will upload your member expiries in under 60 seconds with zero manual data entry.
        </div>
      </div>

      <div class="btn-container">
        <a href="${waUrl}" class="btn" target="_blank" rel="noopener noreferrer">
          Chat With Our Team on WhatsApp →
        </a>
      </div>

      <p style="font-size: 12px; color: #64748b; text-align: center; margin-top: 20px;">
        Have immediate questions? Reply directly to this email or write to <a href="mailto:support@vihaya.app" style="color: #16a34a; font-weight: 600;">support@vihaya.app</a>.
      </p>
    </div>

    <div class="footer">
      SetRenew is a product of <strong>Vihaya Innovations Private Limited</strong>.<br>
      Pallimukku, Kollam, Kerala, India.<br>
      &copy; 2026 SetRenew. All rights reserved. · <a href="https://setrenew.vihaya.app/privacy">Privacy Policy</a> · <a href="https://setrenew.vihaya.app/terms">Terms</a>
    </div>
  </div>
</body>
</html>
  `;

  return sendZeptoMail({
    toAddress: lead.email,
    toName: lead.ownerName,
    subject: `Your SetRenew 30-Day VIP Trial is Confirmed — ${lead.gymName}`,
    htmlContent: html,
  });
}

/**
 * 2. Instant Internal Notification to Team / Founder
 */
export async function sendTeamLeadNotification(lead: EmailLeadPayload): Promise<boolean> {
  const digits = lead.phone.replace(/\D/g, '');
  const waLink = `https://wa.me/91${digits}?text=Hi%20${encodeURIComponent(lead.ownerName)},%20this%20is%20Vishnu%20from%20SetRenew!%20Saw%20your%20application%20for%20${encodeURIComponent(lead.gymName)}.`;

  const html = `
<div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 20px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
  <div style="background: #16a34a; color: white; padding: 12px 16px; border-radius: 6px; font-weight: bold; font-size: 15px;">
    🔥 New SetRenew Gym Application: ${lead.gymName}
  </div>

  <div style="padding: 16px 0;">
    <p style="font-size: 14px; margin: 0 0 12px;"><strong>Owner:</strong> ${lead.ownerName}</p>
    <p style="font-size: 14px; margin: 0 0 12px;"><strong>Phone:</strong> <a href="tel:+91${digits}">+91 ${lead.phone}</a></p>
    <p style="font-size: 14px; margin: 0 0 12px;"><strong>Email:</strong> <a href="mailto:${lead.email}">${lead.email}</a></p>
    <p style="font-size: 14px; margin: 0 0 12px;"><strong>City:</strong> ${lead.city}</p>
    <p style="font-size: 14px; margin: 0 0 12px;"><strong>Members:</strong> ${lead.memberCount}</p>
    <p style="font-size: 14px; margin: 0 0 12px;"><strong>Monthly Fee:</strong> ${lead.monthlyFeeRange || 'N/A'}</p>
    <p style="font-size: 14px; margin: 0 0 12px;"><strong>Current System:</strong> ${lead.currentSystem || 'N/A'}</p>
    <p style="font-size: 14px; margin: 0 0 12px;"><strong>Main Headache:</strong> ${lead.primaryPainPoint || 'N/A'}</p>
  </div>

  <div style="margin-top: 14px; display: flex; gap: 10px;">
    <a href="${waLink}" style="background: #25D366; color: white; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 13px;">
      WhatsApp Gym Owner →
    </a>
  </div>
</div>
  `;

  // Dispatch to both support@vihaya.app and founder notification email
  await sendZeptoMail({
    toAddress: TEAM_INBOX,
    toName: 'SetRenew Growth Team',
    subject: `🔥 New Gym Lead: ${lead.gymName} (${lead.ownerName}) — ${lead.city}`,
    htmlContent: html,
  });

  await sendZeptoMail({
    toAddress: NOTIFY_INBOX,
    toName: 'Vishnu',
    subject: `🔥 New Gym Lead: ${lead.gymName} (${lead.ownerName}) — ${lead.city}`,
    htmlContent: html,
  });

  return true;
}

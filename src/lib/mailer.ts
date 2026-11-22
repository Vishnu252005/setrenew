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
const FROM_ADDRESS = process.env.MAIL_FROM_ADDRESS || 'setrenew@vihaya.app';
const FROM_NAME = 'SetRenew';
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
 * 1. Ultra-Premium VIP Pass & Confirmation Email to Gym Owners
 */
export async function sendApplicantWelcomeEmail(lead: EmailLeadPayload): Promise<boolean> {
  if (!lead.email || !lead.email.includes('@')) {
    return false;
  }

  const portalUrl = 'https://setrenew.vihaya.app/';
  const passId = `SR-${new Date().getFullYear()}-VIP-${lead.id.slice(-4).toUpperCase()}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your SetRenew VIP Pass is Ready</title>
  <style>
    body {
      margin: 0;
      padding: 32px 16px;
      background-color: #0c0a09;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      max-width: 580px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
      border: 1px solid #27272a;
    }
    .header-banner {
      background: linear-gradient(135deg, #09090b 0%, #18181b 100%);
      padding: 36px 36px 32px;
      border-bottom: 2px solid #16a34a;
      text-align: left;
    }
    .brand-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
    }
    .brand-logo {
      display: inline-block;
      width: 32px;
      height: 32px;
      background-color: #16a34a;
      color: #ffffff;
      border-radius: 8px;
      text-align: center;
      line-height: 32px;
      font-size: 17px;
      font-weight: 800;
    }
    .brand-name {
      font-size: 20px;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #ffffff;
    }
    .brand-sub {
      color: #71717a;
      font-size: 13px;
      margin-left: 6px;
    }
    .vip-tag {
      display: inline-block;
      padding: 4px 10px;
      background-color: rgba(22, 163, 74, 0.15);
      border: 1px solid rgba(22, 163, 74, 0.4);
      border-radius: 6px;
      font-size: 11px;
      font-weight: 700;
      color: #4ade80;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .header-title {
      font-size: 24px;
      font-weight: 800;
      color: #ffffff;
      margin: 0 0 8px;
      letter-spacing: -0.02em;
      line-height: 1.25;
    }
    .header-desc {
      font-size: 14px;
      color: #a1a1aa;
      margin: 0;
      line-height: 1.5;
    }
    .body-content {
      padding: 36px;
    }
    .greeting {
      font-size: 15px;
      color: #334155;
      line-height: 1.6;
      margin-bottom: 24px;
    }
    /* Digital VIP Pass Card */
    .vip-card {
      background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
      border: 1px solid #cbd5e1;
      border-radius: 12px;
      padding: 22px;
      margin: 24px 0 28px;
    }
    .vip-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px dashed #cbd5e1;
      padding-bottom: 14px;
      margin-bottom: 14px;
    }
    .card-label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #64748b;
    }
    .card-id {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 12px;
      font-weight: 700;
      color: #16a34a;
      background: #dcfce7;
      padding: 2px 8px;
      border-radius: 4px;
    }
    .grid-2 {
      display: table;
      width: 100%;
    }
    .grid-col {
      display: table-cell;
      width: 50%;
      vertical-align: top;
      padding-bottom: 8px;
    }
    .grid-col-right {
      display: table-cell;
      width: 50%;
      vertical-align: top;
      text-align: right;
      padding-bottom: 8px;
    }
    .val-title {
      font-size: 11px;
      color: #64748b;
      margin-bottom: 2px;
    }
    .val-main {
      font-size: 14px;
      font-weight: 700;
      color: #0f172a;
    }
    /* Steps section */
    .steps-section {
      margin: 28px 0;
    }
    .section-heading {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #0f172a;
      margin-bottom: 16px;
    }
    .step-box {
      display: flex;
      gap: 14px;
      margin-bottom: 16px;
      align-items: flex-start;
    }
    .step-badge {
      width: 26px;
      height: 26px;
      background-color: #16a34a;
      color: #ffffff;
      border-radius: 7px;
      font-size: 12px;
      font-weight: 800;
      text-align: center;
      line-height: 26px;
      flex-shrink: 0;
    }
    .step-details h4 {
      margin: 0 0 3px;
      font-size: 14px;
      font-weight: 700;
      color: #0f172a;
    }
    .step-details p {
      margin: 0;
      font-size: 12px;
      line-height: 1.5;
      color: #64748b;
    }
    /* CTA button */
    .cta-container {
      text-align: center;
      margin: 32px 0 16px;
    }
    .cta-btn {
      display: inline-block;
      background-color: #16a34a;
      color: #ffffff !important;
      font-size: 14px;
      font-weight: 700;
      padding: 14px 28px;
      border-radius: 8px;
      text-decoration: none;
      box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);
      letter-spacing: 0.01em;
    }
    .founder-note {
      border-left: 3px solid #16a34a;
      background-color: #f8fafc;
      padding: 14px 18px;
      margin: 24px 0 16px;
      border-radius: 0 8px 8px 0;
    }
    .founder-quote {
      font-size: 13px;
      font-style: italic;
      color: #334155;
      line-height: 1.5;
      margin: 0 0 6px;
    }
    .founder-sign {
      font-size: 11px;
      font-weight: 700;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .footer {
      background-color: #09090b;
      padding: 24px 36px;
      text-align: center;
      color: #71717a;
      font-size: 11px;
      line-height: 1.6;
    }
    .footer a {
      color: #a1a1aa;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header-banner">
      <div class="brand-row">
        <span class="brand-logo">⚡</span>
        <span class="brand-name">SetRenew</span>
      </div>
      <div class="vip-tag">30-Day VIP Pass · Unrestricted Access</div>
      <h1 class="header-title">Welcome to Auto-Renew Mode, ${lead.ownerName}!</h1>
      <p class="header-desc">Your gym’s automated WhatsApp fee recovery system is ready for activation.</p>
    </div>

    <div class="body-content">
      <p class="greeting">
        Hi <strong>${lead.ownerName}</strong>,<br><br>
        Thank you for reserving early access. While traditional gyms in India still lose <strong>₹35,000 to ₹50,000 every month</strong> to forgotten expiries and manual registers, <strong>${lead.gymName}</strong> is officially moving to 100% automated WhatsApp collections.
      </p>

      <div class="vip-card">
        <div class="vip-card-header">
          <span class="card-label">Official VIP Activation Pass</span>
          <span class="card-id">${passId}</span>
        </div>
        <div class="grid-2">
          <div class="grid-col">
            <div class="val-title">GYM NAME</div>
            <div class="val-main">${lead.gymName}</div>
          </div>
          <div class="grid-col-right">
            <div class="val-title">LOCATION</div>
            <div class="val-main">${lead.city}</div>
          </div>
        </div>
        <div class="grid-2" style="margin-top: 10px;">
          <div class="grid-col">
            <div class="val-title">ACTIVE MEMBERS</div>
            <div class="val-main">${lead.memberCount} Members</div>
          </div>
          <div class="grid-col-right">
            <div class="val-title">UPI COMMISSION</div>
            <div class="val-main" style="color: #16a34a;">0% (Direct to Bank)</div>
          </div>
        </div>
        <div class="grid-2" style="margin-top: 10px;">
          <div class="grid-col">
            <div class="val-title">TRIAL DURATION</div>
            <div class="val-main">30 Days 100% Free</div>
          </div>
          <div class="grid-col-right">
            <div class="val-title">HARDWARE NEEDED</div>
            <div class="val-main">₹0 (Mobile Native)</div>
          </div>
        </div>
      </div>

      <div class="steps-section">
        <div class="section-heading">How We Get Your Gym Running in 2 Minutes:</div>

        <div class="step-box">
          <div class="step-badge">1</div>
          <div class="step-details">
            <h4>Automated WhatsApp Reminders</h4>
            <p>Polite messages are dispatched automatically 3 days and 1 day before plan expiry with a direct 1-tap GPay / PhonePe payment button.</p>
          </div>
        </div>

        <div class="step-box">
          <div class="step-badge">2</div>
          <div class="step-details">
            <h4>100% Money to Your Bank (0% Cut)</h4>
            <p>Payments route directly from member UPI apps to your gym’s existing QR / UPI VPA. No middlemen, no 3-day gateway delays.</p>
          </div>
        </div>

        <div class="step-box">
          <div class="step-badge">3</div>
          <div class="step-details">
            <h4>60-Second Spreadsheet Import</h4>
            <p>Share your existing member notebook or Excel sheet on WhatsApp. Our onboarding team uploads everything with zero manual typing.</p>
          </div>
        </div>
      </div>

      <div class="cta-container">
        <a href="${portalUrl}" class="cta-btn" target="_blank">
          Access SetRenew →
        </a>
      </div>

      <div class="founder-note">
        <p class="founder-quote">
          “No more standing at reception saying ‘Bhai, fees pending hai’. SetRenew handles collections politely in the background so you can focus on training members.”
        </p>
        <span class="founder-sign">— The SetRenew Team</span>
      </div>

      <p style="font-size: 12px; color: #64748b; text-align: center; margin-top: 24px;">
        Questions? Simply reply directly to this email or write to <strong style="color: #0f172a;">support@vihaya.app</strong>.
      </p>
    </div>

    <div class="footer">
      SetRenew · 100% WhatsApp-Native Gym Dues & Fee Recovery.<br>
      &copy; 2026 SetRenew. All rights reserved. · <a href="https://setrenew.vihaya.app/privacy">Privacy Policy</a> · <a href="https://setrenew.vihaya.app/terms">Terms of Service</a>
    </div>
  </div>
</body>
</html>
  `;

  return sendZeptoMail({
    toAddress: lead.email,
    toName: lead.ownerName,
    subject: `⚡ Your SetRenew 30-Day VIP Pass is Ready — ${lead.gymName}`,
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

  <div style="margin-top: 14px;">
    <a href="${waLink}" style="display: inline-block; background: #25D366; color: white; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 13px;">
      WhatsApp Gym Owner →
    </a>
  </div>
</div>
  `;

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

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
 * 1. Bulletproof, Table-based VIP Waitlist Confirmation Email to Gym Owners
 * Render-tested for Gmail, Apple Mail, Outlook (zero flexbox, 100% inline styles)
 */
export async function sendApplicantWelcomeEmail(lead: EmailLeadPayload): Promise<boolean> {
  if (!lead.email || !lead.email.includes('@')) {
    return false;
  }

  const portalUrl = 'https://setrenew.vihaya.app/';
  const spotNum = lead.position || 1131;
  const spotFormatted = Number(spotNum).toLocaleString();
  const passId = `SR-${new Date().getFullYear()}-#${spotNum}`;

  const html = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Priority Waitlist Spot is Reserved — SetRenew</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; -webkit-font-smoothing: antialiased;">
  <!-- Centered Container Table -->
  <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);">
    
    <!-- Top Brand Header -->
    <tr>
      <td style="background-color: #09090b; padding: 32px 32px 28px; border-bottom: 2px solid #16a34a;">
        <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td style="vertical-align: middle;">
              <span style="display: inline-block; width: 28px; height: 28px; background-color: #16a34a; color: #ffffff; border-radius: 6px; text-align: center; line-height: 28px; font-size: 15px; font-weight: bold; margin-right: 8px; vertical-align: middle;">⚡</span>
              <span style="font-size: 20px; font-weight: 800; letter-spacing: -0.02em; color: #ffffff; vertical-align: middle;">SetRenew</span>
            </td>
            <td align="right" style="vertical-align: middle;">
              <span style="display: inline-block; padding: 4px 10px; background-color: rgba(22, 163, 74, 0.2); border: 1px solid rgba(22, 163, 74, 0.5); border-radius: 6px; font-size: 11px; font-weight: 700; color: #4ade80; text-transform: uppercase; letter-spacing: 0.05em;">Priority Spot #${spotFormatted}</span>
            </td>
          </tr>
        </table>
        
        <div style="margin-top: 24px;">
          <h1 style="font-size: 22px; font-weight: 800; color: #ffffff; margin: 0 0 6px; line-height: 1.3; letter-spacing: -0.01em;">
            Spot Confirmed for ${lead.gymName}
          </h1>
          <p style="font-size: 13px; color: #a1a1aa; margin: 0; line-height: 1.5;">
            Welcome to the future of automated gym fee collection.
          </p>
        </div>
      </td>
    </tr>

    <!-- Main Content Area -->
    <tr>
      <td style="padding: 32px 32px 24px;">
        <p style="font-size: 14px; line-height: 1.6; color: #334155; margin: 0 0 20px;">
          Hi <strong>${lead.ownerName}</strong>,
        </p>
        <p style="font-size: 14px; line-height: 1.6; color: #334155; margin: 0 0 24px;">
          Thank you for reserving early access. You have officially joined <strong>1,000+ gym owners across India</strong> who are moving away from forgotten expiries and awkward manual follow-ups. <strong>${lead.gymName}</strong> is locked in at <strong>Priority Spot #${spotFormatted}</strong>.
        </p>

        <!-- Digital Pass Card -->
        <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 10px; margin-bottom: 28px; overflow: hidden;">
          <tr>
            <td style="padding: 16px 20px; border-bottom: 1px dashed #cbd5e1;">
              <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #64748b;">
                    Official Priority Pass
                  </td>
                  <td align="right">
                    <span style="font-family: monospace; font-size: 12px; font-weight: 700; color: #15803d; background-color: #dcfce7; padding: 3px 8px; border-radius: 4px;">${passId}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 16px 20px;">
              <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="50%" style="vertical-align: top; padding-bottom: 12px;">
                    <div style="font-size: 11px; color: #64748b; margin-bottom: 2px;">GYM NAME</div>
                    <div style="font-size: 13px; font-weight: 700; color: #0f172a;">${lead.gymName}</div>
                  </td>
                  <td width="50%" align="right" style="vertical-align: top; padding-bottom: 12px;">
                    <div style="font-size: 11px; color: #64748b; margin-bottom: 2px;">LOCATION</div>
                    <div style="font-size: 13px; font-weight: 700; color: #0f172a;">${lead.city}</div>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="vertical-align: top; padding-bottom: 4px;">
                    <div style="font-size: 11px; color: #64748b; margin-bottom: 2px;">ACTIVE MEMBERS</div>
                    <div style="font-size: 13px; font-weight: 700; color: #0f172a;">${lead.memberCount}</div>
                  </td>
                  <td width="50%" align="right" style="vertical-align: top; padding-bottom: 4px;">
                    <div style="font-size: 11px; color: #64748b; margin-bottom: 2px;">VIP TRIAL OFFER</div>
                    <div style="font-size: 13px; font-weight: 700; color: #16a34a;">30 Days 100% Free</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- What Happens Next Section -->
        <h3 style="font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #0f172a; margin: 0 0 16px;">
          What Happens Next:
        </h3>

        <!-- Step 1 (Table Row for 100% email client support) -->
        <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
          <tr>
            <td width="32" style="vertical-align: top; padding-right: 12px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="26" height="26" align="center" style="background-color: #16a34a; color: #ffffff; border-radius: 6px; font-size: 12px; font-weight: 800;">
                    1
                  </td>
                </tr>
              </table>
            </td>
            <td style="vertical-align: top;">
              <h4 style="margin: 0 0 4px; font-size: 14px; font-weight: 700; color: #0f172a;">
                Batch Rollout & Review
              </h4>
              <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #64748b;">
                We onboard gyms in dedicated cohorts of 10 to ensure a zero-effort, white-glove setup with our engineering team.
              </p>
            </td>
          </tr>
        </table>

        <!-- Step 2 -->
        <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
          <tr>
            <td width="32" style="vertical-align: top; padding-right: 12px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="26" height="26" align="center" style="background-color: #16a34a; color: #ffffff; border-radius: 6px; font-size: 12px; font-weight: 800;">
                    2
                  </td>
                </tr>
              </table>
            </td>
            <td style="vertical-align: top;">
              <h4 style="margin: 0 0 4px; font-size: 14px; font-weight: 700; color: #0f172a;">
                Instant Launch Email & Access Link
              </h4>
              <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #64748b;">
                The exact moment SetRenew goes live for your batch, you will receive an email notification with your direct access link so you can immediately log in and use it.
              </p>
            </td>
          </tr>
        </table>

        <!-- Step 3 -->
        <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
          <tr>
            <td width="32" style="vertical-align: top; padding-right: 12px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="26" height="26" align="center" style="background-color: #16a34a; color: #ffffff; border-radius: 6px; font-size: 12px; font-weight: 800;">
                    3
                  </td>
                </tr>
              </table>
            </td>
            <td style="vertical-align: top;">
              <h4 style="margin: 0 0 4px; font-size: 14px; font-weight: 700; color: #0f172a;">
                1-on-1 WhatsApp Setup & 30-Day VIP Trial
              </h4>
              <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #64748b;">
                Our team will assist you on WhatsApp to import your member notebook or spreadsheet in 60 seconds. All payments go 100% direct to your bank QR with 0% fee.
              </p>
            </td>
          </tr>
        </table>

        <!-- Launch Alert Box -->
        <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; margin: 20px 0 24px;">
          <tr>
            <td style="padding: 14px 18px;">
              <div style="font-size: 13px; font-weight: 700; color: #166534; margin-bottom: 3px;">
                🔔 You will receive an email the moment it is live
              </div>
              <div style="font-size: 12px; color: #15803d; line-height: 1.5;">
                No action is needed right now. As soon as this feature is rolled out, we will send an email directly to <strong>${lead.email}</strong> so you can immediately jump in and use it.
              </div>
            </td>
          </tr>
        </table>

        <!-- CTA Button (Rectangular modern radius, NEVER rounded-full) -->
        <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="margin: 28px 0 20px;">
          <tr>
            <td align="center">
              <a href="${portalUrl}" target="_blank" style="display: inline-block; background-color: #16a34a; color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none; padding: 13px 26px; border-radius: 8px; border: 1px solid #15803d; letter-spacing: 0.01em;">
                Visit SetRenew Online &rarr;
              </a>
            </td>
          </tr>
        </table>

        <!-- Quote Box -->
        <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-left: 3px solid #16a34a; border-radius: 0 6px 6px 0; margin-bottom: 20px;">
          <tr>
            <td style="padding: 12px 16px;">
              <p style="font-size: 12px; font-style: italic; color: #475569; margin: 0 0 4px; line-height: 1.5;">
                &ldquo;No more awkward front-desk confrontations asking members for pending dues. SetRenew handles renewal reminders politely in the background so you can focus on training.&rdquo;
              </p>
              <div style="font-size: 11px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.04em;">
                &mdash; The SetRenew Team
              </div>
            </td>
          </tr>
        </table>

        <!-- Help line -->
        <p style="font-size: 12px; color: #64748b; text-align: center; margin: 20px 0 0; line-height: 1.5;">
          Need priority onboarding or have questions? Simply reply directly to this email or write to <a href="mailto:support@vihaya.app" style="color: #16a34a; text-decoration: none; font-weight: 600;">support@vihaya.app</a>.
        </p>
      </td>
    </tr>

    <!-- Clean, non-collapsible Footer -->
    <tr>
      <td style="background-color: #09090b; padding: 20px 24px; text-align: center; border-top: 1px solid #27272a;">
        <div style="font-size: 11px; color: #a1a1aa; line-height: 1.6;">
          SetRenew &middot; 100% WhatsApp-Native Gym Dues &amp; Fee Recovery<br />
          <span style="color: #71717a;">&copy; 2026 SetRenew. All rights reserved. &middot; <a href="https://setrenew.vihaya.app/privacy" style="color: #a1a1aa; text-decoration: none;">Privacy</a> &middot; <a href="https://setrenew.vihaya.app/terms" style="color: #a1a1aa; text-decoration: none;">Terms</a></span>
        </div>
      </td>
    </tr>

  </table>
</body>
</html>
  `;

  return sendZeptoMail({
    toAddress: lead.email,
    toName: lead.ownerName,
    subject: `⚡ Your SetRenew Priority Waitlist Spot #${spotFormatted} is Reserved — ${lead.gymName}`,
    htmlContent: html,
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
    🔥 New Gym Lead: ${lead.gymName}
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
      💬 Open WhatsApp Chat with Owner &rarr;
    </a>
  </div>
</div>
  `;

  // Send to both founder notifications
  await sendZeptoMail({
    toAddress: TEAM_INBOX,
    toName: 'SetRenew Growth Team',
    subject: `🔥 New Gym Lead: ${lead.gymName} (${lead.ownerName}) — ${lead.city}`,
    htmlContent: html,
  });

  return sendZeptoMail({
    toAddress: NOTIFY_INBOX,
    toName: 'Vishnu S',
    subject: `🔥 New Gym Lead: ${lead.gymName} (${lead.ownerName}) — ${lead.city}`,
    htmlContent: html,
  });
}

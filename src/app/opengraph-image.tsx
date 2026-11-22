import { ImageResponse } from 'next/og';

export const alt = 'SetRenew — Stop Chasing Gym Fees. Collect On WhatsApp.';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
          border: '16px solid #e2e8f0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              backgroundColor: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '28px',
              fontWeight: 800,
            }}
          >
            SR
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '32px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px' }}>
              SetRenew
            </span>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#2563eb', letterSpacing: '0.5px' }}>
              OFFICIAL META WHATSAPP CLOUD API
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '960px' }}>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 900,
              color: '#0f172a',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              margin: 0,
            }}
          >
            Stop Chasing Gym Fees. <br />
            <span style={{ color: '#2563eb' }}>Collect On WhatsApp.</span>
          </h1>
          <p
            style={{
              fontSize: '24px',
              color: '#475569',
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Automated WhatsApp renewal reminders with 1-tap UPI links. Zero hardware. Zero manual follow-ups.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#dbeafe',
              borderRadius: '10px',
              padding: '10px 18px',
              fontSize: '18px',
              fontWeight: 700,
              color: '#1d4ed8',
            }}
          >
            30 Days Free Trial
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#dcfce7',
              borderRadius: '10px',
              padding: '10px 18px',
              fontSize: '18px',
              fontWeight: 700,
              color: '#15803d',
            }}
          >
            Direct GPay & PhonePe (0% Cut)
          </div>
          <div
            style={{
              fontSize: '18px',
              color: '#64748b',
              fontWeight: 600,
            }}
          >
            setrenew.in
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

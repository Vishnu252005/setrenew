import { ImageResponse } from 'next/og';

export const alt = 'SetRenew — Collect Gym Fees Automatically on WhatsApp';
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
          background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 50%, #ffffff 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
          border: '16px solid #dcfce7',
        }}
      >
        {/* Top Brand Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              backgroundColor: '#16a34a',
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
            <span style={{ fontSize: '34px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px' }}>
              SetRenew
            </span>
            <span style={{ fontSize: '15px', fontWeight: 800, color: '#16a34a', letterSpacing: '0.5px' }}>
              BUILT FOR INDIAN GYM OWNERS 🇮🇳
            </span>
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '980px' }}>
          <h1
            style={{
              fontSize: '66px',
              fontWeight: 900,
              color: '#0f172a',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              margin: 0,
            }}
          >
            Collect Gym Fees <br />
            Automatically on <span style={{ color: '#16a34a' }}>WhatsApp.</span>
          </h1>
          <p
            style={{
              fontSize: '24px',
              color: '#475569',
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Polite WhatsApp reminders with direct 1-tap UPI payment links (GPay, PhonePe). Zero biometric hardware. Flat ₹499/mo.
          </p>
        </div>

        {/* Bottom Feature Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#16a34a',
              borderRadius: '10px',
              padding: '12px 22px',
              fontSize: '18px',
              fontWeight: 800,
              color: '#ffffff',
            }}
          >
            First 30 Days 100% Free
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#f0fdf4',
              borderRadius: '10px',
              border: '2px solid #bbf7d0',
              padding: '10px 20px',
              fontSize: '18px',
              fontWeight: 700,
              color: '#15803d',
            }}
          >
            Direct UPI to Bank (0% Cut)
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#f8fafc',
              borderRadius: '10px',
              border: '2px solid #e2e8f0',
              padding: '10px 20px',
              fontSize: '18px',
              fontWeight: 700,
              color: '#334155',
            }}
          >
            Zero Biometrics Needed
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

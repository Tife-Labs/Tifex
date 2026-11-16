import { ImageResponse } from 'next/og';

export const alt = 'Tifex by Tifelabz — Creative Technology Studio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0a0a0b',
          padding: 80,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 40, color: '#c9a961', fontWeight: 600 }}>
          Tifex.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 400,
              color: '#f2efe9',
              lineHeight: 1.05,
              letterSpacing: '-2px',
              maxWidth: 900,
            }}
          >
            We engineer bold software for ambitious brands.
          </div>
          <div style={{ fontSize: 24, color: '#9a9a9f' }}>
            Creative Technology Studio · Tifelabz
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
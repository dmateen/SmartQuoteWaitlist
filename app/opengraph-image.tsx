import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Roofing Leads Magnet - Get Instant Roofing Quotes'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'system-ui',
        }}
      >
        {/* House Icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="none"
          >
            {/* Roof */}
            <path
              d="M80 20L140 70H20L80 20Z"
              fill="white"
              stroke="#f1f5f9"
              strokeWidth="3"
            />
            {/* House */}
            <rect x="35" y="70" width="90" height="60" fill="white" stroke="#e2e8f0" strokeWidth="2" />
            {/* Door */}
            <rect x="70" y="95" width="20" height="35" fill="#374151" rx="2" />
            {/* Windows */}
            <rect x="45" y="80" width="12" height="12" fill="#3b82f6" />
            <rect x="103" y="80" width="12" height="12" fill="#3b82f6" />
            {/* Foundation */}
            <rect x="30" y="130" width="100" height="6" fill="#e2e8f0" />
          </svg>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '20px',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
          }}
        >
          Smart Roofing Quotes
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: '#e2e8f0',
            textAlign: 'center',
            fontWeight: 500,
            marginBottom: '30px',
          }}
        >
          Get instant, accurate roofing estimates in minutes
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '60px',
            fontSize: '24px',
            color: 'white',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
            Instant Quotes
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
            No Signup Required
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
            Professional Results
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
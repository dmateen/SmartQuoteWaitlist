import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Roofing Leads Magnet - Get Instant Roofing Quotes'
export const size = {
  width: 1200,
  height: 600,
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
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 8l22 14H8L30 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat`,
          }}
        />

        {/* House Icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
          }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
          >
            {/* Roof */}
            <path
              d="M60 15L105 52H15L60 15Z"
              fill="white"
              stroke="#f1f5f9"
              strokeWidth="2"
            />
            {/* House */}
            <rect x="27" y="52" width="66" height="45" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
            {/* Door */}
            <rect x="52" y="70" width="16" height="27" fill="#374151" rx="1.5" />
            {/* Windows */}
            <rect x="34" y="60" width="10" height="10" fill="#3b82f6" />
            <rect x="76" y="60" width="10" height="10" fill="#3b82f6" />
            {/* Foundation */}
            <rect x="24" y="97" width="72" height="4" fill="#e2e8f0" />
          </svg>
        </div>

        {/* Main Content */}
        <div
          style={{
            textAlign: 'center',
            color: 'white',
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 'bold',
              marginBottom: '16px',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Smart Roofing Quotes
          </div>
          
          <div
            style={{
              fontSize: 28,
              color: '#e2e8f0',
              fontWeight: 500,
              marginBottom: '24px',
            }}
          >
            Get instant roofing estimates in minutes
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '40px',
              fontSize: '20px',
              color: 'white',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              Instant Results
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              No Signup
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              Professional
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
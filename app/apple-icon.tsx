import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'
 
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20px',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32" fill="none">
          {/* Roof structure */}
          <path 
            d="M16 4L26 14H6L16 4Z" 
            fill="white" 
            stroke="#f1f5f9" 
            strokeWidth="1.5" 
            strokeLinejoin="round"
          />
          
          {/* House base */}
          <rect 
            x="8" 
            y="14" 
            width="16" 
            height="12" 
            fill="rgba(255,255,255,0.9)" 
            stroke="rgba(255,255,255,0.7)" 
            strokeWidth="1"
          />
          
          {/* Door */}
          <rect 
            x="13" 
            y="18" 
            width="6" 
            height="8" 
            fill="rgba(0,0,0,0.7)" 
            rx="1"
          />
          
          {/* Door handle */}
          <circle 
            cx="17.5" 
            cy="22" 
            r="0.5" 
            fill="rgba(255,255,255,0.8)"
          />
          
          {/* Windows */}
          <rect 
            x="10" 
            y="16" 
            width="3" 
            height="3" 
            fill="rgba(251,146,60,0.8)" 
            stroke="rgba(234,88,12,0.8)" 
            strokeWidth="0.5"
          />
          <rect 
            x="19" 
            y="16" 
            width="3" 
            height="3" 
            fill="rgba(251,146,60,0.8)" 
            stroke="rgba(234,88,12,0.8)" 
            strokeWidth="0.5"
          />
          
          {/* Window cross */}
          <line 
            x1="11.5" 
            y1="16" 
            x2="11.5" 
            y2="19" 
            stroke="rgba(234,88,12,0.8)" 
            strokeWidth="0.5"
          />
          <line 
            x1="10" 
            y1="17.5" 
            x2="13" 
            y2="17.5" 
            stroke="rgba(234,88,12,0.8)" 
            strokeWidth="0.5"
          />
          <line 
            x1="20.5" 
            y1="16" 
            x2="20.5" 
            y2="19" 
            stroke="rgba(234,88,12,0.8)" 
            strokeWidth="0.5"
          />
          <line 
            x1="19" 
            y1="17.5" 
            x2="22" 
            y2="17.5" 
            stroke="rgba(234,88,12,0.8)" 
            strokeWidth="0.5"
          />
          
          {/* Roof ridge */}
          <line 
            x1="6" 
            y1="14" 
            x2="26" 
            y2="14" 
            stroke="#f1f5f9" 
            strokeWidth="1"
          />
          
          {/* Foundation */}
          <rect 
            x="7" 
            y="26" 
            width="18" 
            height="2" 
            fill="rgba(255,255,255,0.6)"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
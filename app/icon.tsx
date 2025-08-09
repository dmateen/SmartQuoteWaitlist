import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          {/* Roof structure */}
          <path 
            d="M16 4L26 14H6L16 4Z" 
            fill="var(--icon-roof)" 
            stroke="var(--icon-roof-border)" 
            strokeWidth="1.5" 
            strokeLinejoin="round"
          />
          
          {/* House base */}
          <rect 
            x="8" 
            y="14" 
            width="16" 
            height="12" 
            fill="var(--icon-house)" 
            stroke="var(--icon-house-border)" 
            strokeWidth="1"
          />
          
          {/* Door */}
          <rect 
            x="13" 
            y="18" 
            width="6" 
            height="8" 
            fill="var(--icon-door)" 
            rx="1"
          />
          
          {/* Door handle */}
          <circle 
            cx="17.5" 
            cy="22" 
            r="0.5" 
            fill="var(--icon-handle)"
          />
          
          {/* Windows */}
          <rect 
            x="10" 
            y="16" 
            width="3" 
            height="3" 
            fill="var(--icon-window)" 
            stroke="var(--icon-window-border)" 
            strokeWidth="0.5"
          />
          <rect 
            x="19" 
            y="16" 
            width="3" 
            height="3" 
            fill="var(--icon-window)" 
            stroke="var(--icon-window-border)" 
            strokeWidth="0.5"
          />
          
          {/* Window cross */}
          <line 
            x1="11.5" 
            y1="16" 
            x2="11.5" 
            y2="19" 
            stroke="var(--icon-window-border)" 
            strokeWidth="0.5"
          />
          <line 
            x1="10" 
            y1="17.5" 
            x2="13" 
            y2="17.5" 
            stroke="var(--icon-window-border)" 
            strokeWidth="0.5"
          />
          <line 
            x1="20.5" 
            y1="16" 
            x2="20.5" 
            y2="19" 
            stroke="var(--icon-window-border)" 
            strokeWidth="0.5"
          />
          <line 
            x1="19" 
            y1="17.5" 
            x2="22" 
            y2="17.5" 
            stroke="var(--icon-window-border)" 
            strokeWidth="0.5"
          />
          
          {/* Roof ridge */}
          <line 
            x1="6" 
            y1="14" 
            x2="26" 
            y2="14" 
            stroke="var(--icon-roof-border)" 
            strokeWidth="1"
          />
          
          {/* Foundation */}
          <rect 
            x="7" 
            y="26" 
            width="18" 
            height="2" 
            fill="var(--icon-foundation)"
          />
          
          {/* Subtle roof texture lines */}
          <line 
            x1="9" 
            y1="12" 
            x2="11" 
            y2="10" 
            stroke="var(--icon-roof-border)" 
            strokeWidth="0.5" 
            opacity="0.5"
          />
          <line 
            x1="13" 
            y1="8" 
            x2="15" 
            y2="10" 
            stroke="var(--icon-roof-border)" 
            strokeWidth="0.5" 
            opacity="0.5"
          />
          <line 
            x1="17" 
            y1="10" 
            x2="19" 
            y2="8" 
            stroke="var(--icon-roof-border)" 
            strokeWidth="0.5" 
            opacity="0.5"
          />
          <line 
            x1="21" 
            y1="10" 
            x2="23" 
            y2="12" 
            stroke="var(--icon-roof-border)" 
            strokeWidth="0.5" 
            opacity="0.5"
          />
          
          <style>
            {`
              :root {
                --icon-roof: #ea580c;
                --icon-roof-border: #c2410c;
                --icon-house: #f3f4f6;
                --icon-house-border: #6b7280;
                --icon-door: #374151;
                --icon-handle: #9ca3af;
                --icon-window: #fb923c;
                --icon-window-border: #ea580c;
                --icon-foundation: #6b7280;
              }
              
              @media (prefers-color-scheme: dark) {
                :root {
                  --icon-roof: #fb923c;
                  --icon-roof-border: #fdba74;
                  --icon-house: #374151;
                  --icon-house-border: #9ca3af;
                  --icon-door: #1f2937;
                  --icon-handle: #6b7280;
                  --icon-window: #fdba74;
                  --icon-window-border: #fb923c;
                  --icon-foundation: #4b5563;
                }
              }
            `}
          </style>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
interface DeviceFrameProps {
  children: React.ReactNode
  color?: 'black' | 'titanium' | 'silver'
  scale?: number
  showStatusBar?: boolean
  className?: string
}

const FRAME_GRADIENTS: Record<NonNullable<DeviceFrameProps['color']>, string> = {
  black: 'linear-gradient(145deg, #1C1C1E, #2C2C2E, #1C1C1E)',
  titanium: 'linear-gradient(145deg, #8E8E93, #636366, #8E8E93)',
  silver: 'linear-gradient(145deg, #E8E8E8, #C8C8C8, #E8E8E8)',
}

const BUTTON_COLORS: Record<NonNullable<DeviceFrameProps['color']>, string> = {
  black: '#3A3A3C',
  titanium: '#48484A',
  silver: '#AEAEB2',
}

function StatusIcons() {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
        <rect x="0" y="7" width="3" height="5" rx="0.5" opacity="0.4" />
        <rect x="4" y="5" width="3" height="7" rx="0.5" opacity="0.6" />
        <rect x="8" y="3" width="3" height="9" rx="0.5" opacity="0.8" />
        <rect x="12" y="1" width="3" height="11" rx="0.5" />
      </svg>
      <svg width="14" height="12" viewBox="0 0 14 12" fill="white">
        <path d="M7 2.5C4.5 2.5 2.3 3.6 1 5.5c1.3 1.9 3.5 3 6 3s4.7-1.1 6-3C11.7 3.6 9.5 2.5 7 2.5z" opacity="0.9" />
        <circle cx="7" cy="10" r="1.5" />
      </svg>
      <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
        <rect x="0.5" y="0.5" width="18" height="11" rx="2" stroke="white" strokeOpacity="0.5" />
        <rect x="2" y="2" width="14" height="8" rx="1" fill="white" />
        <rect x="19.5" y="4" width="2" height="4" rx="0.5" fill="white" fillOpacity="0.5" />
      </svg>
    </div>
  )
}

export function DeviceFrame({
  children,
  color = 'black',
  scale = 0.65,
  showStatusBar = true,
  className,
}: DeviceFrameProps) {
  const scaledHeight = 852 * scale

  return (
    <div
      className={className}
      style={{
        width: 393 * scale,
        height: scaledHeight,
        position: 'relative',
      }}
    >
      <div
        style={{
          width: 393,
          height: 852,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          position: 'absolute',
          top: 0,
          left: '50%',
          marginLeft: -196.5,
        }}
      >
        {/* Side buttons */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: -2,
            top: 120,
            width: 3,
            height: 28,
            borderRadius: 2,
            background: BUTTON_COLORS[color],
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: -2,
            top: 160,
            width: 3,
            height: 52,
            borderRadius: 2,
            background: BUTTON_COLORS[color],
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: -2,
            top: 140,
            width: 3,
            height: 72,
            borderRadius: 2,
            background: BUTTON_COLORS[color],
          }}
        />

        {/* Outer shell */}
        <div
          style={{
            width: 393,
            height: 852,
            borderRadius: 54,
            background: FRAME_GRADIENTS[color],
            border: `1.5px solid var(--device-frame-border)`,
            padding: 11,
            boxSizing: 'border-box',
            position: 'relative',
          }}
        >
          {/* Screen */}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 48,
              background: '#000000',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {showStatusBar && (
              <>
                {/* Dynamic Island */}
                <div
                  style={{
                    position: 'absolute',
                    top: 12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 126,
                    height: 37,
                    borderRadius: 20,
                    background: '#000000',
                    zIndex: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 15,
                      fontWeight: 600,
                      color: '#ffffff',
                      opacity: 0,
                    }}
                  >
                    9:41
                  </span>
                </div>

                {/* Status bar row */}
                <div
                  style={{
                    height: 44,
                    padding: '0 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 10,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 15,
                      fontWeight: 600,
                      color: '#ffffff',
                    }}
                  >
                    9:41
                  </span>
                  <StatusIcons />
                </div>
              </>
            )}

            {/* Screen content */}
            <div
              style={{
                flex: 1,
                overflow: 'hidden',
                position: 'relative',
                minHeight: 0,
              }}
            >
              {children}
            </div>

            {/* Home indicator */}
            <div
              style={{
                height: 21,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingBottom: 8,
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 134,
                  height: 5,
                  borderRadius: 3,
                  background: 'var(--device-home-indicator)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

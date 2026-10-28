import React from 'react';

export function Background({
  variant = 'grid', // 'grid' | 'dots' | 'topo' | 'aurora' | 'paper' | 'mesh' | 'sunrise-mesh'
  className = '',
  wordWatermark,
  children,
}) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Background layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {variant === 'grid' && (
          <div className="w-full h-full relative">
            {/* Fine Ruled Grid 1px lines at ~6% opacity with radial fade mask */}
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]"
              style={{
                maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)',
              }}
            />
            {/* A few pulsing cells */}
            <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-hru-gold/15 animate-pulse rounded" />
            <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-hru-indigo/20 animate-pulse rounded delay-1000" />
          </div>
        )}

        {variant === 'dots' && (
          /* Dot-Grid Pattern */
          <div
            className="w-full h-full bg-[radial-gradient(rgba(255,255,255,0.12)_1.5px,transparent_1.5px)] bg-[size:28px_28px]"
            style={{
              maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)',
            }}
          />
        )}

        {variant === 'topo' && (
          /* Topographic Contour-Line Pattern SVG */
          <svg
            className="w-full h-full opacity-15 stroke-hru-indigo"
            viewBox="0 0 1000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M-50 200 C 200 100, 450 350, 700 150 C 900 0, 1100 250, 1200 200" strokeWidth="1.5" />
            <path d="M-50 260 C 180 160, 430 400, 680 200 C 880 50, 1080 300, 1200 260" strokeWidth="1.5" />
            <path d="M-50 320 C 160 220, 410 450, 660 250 C 860 100, 1060 350, 1200 320" strokeWidth="1.5" />
            <path d="M-50 380 C 140 280, 390 500, 640 300 C 840 150, 1040 400, 1200 380" strokeWidth="1.5" />
            <path d="M-50 440 C 120 340, 370 550, 620 350 C 820 200, 1020 450, 1200 440" strokeWidth="1.5" />
          </svg>
        )}

        {variant === 'aurora' && (
          /* Aurora Cool Gradient Blobs (Indigo to Sky #22D3EE) */
          <div className="w-full h-full relative">
            <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-[#5B5BF0]/25 rounded-full blur-[140px] animate-pulse" />
            <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-[#22D3EE]/20 rounded-full blur-[140px]" />
          </div>
        )}

        {variant === 'mesh' && (
          /* Soft Mesh Gradient */
          <div className="w-full h-full relative">
            <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#5B5BF0]/15 rounded-full blur-[160px]" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-[#22D3EE]/15 rounded-full blur-[150px]" />
          </div>
        )}

        {variant === 'sunrise-mesh' && (
          /* Warm Sunrise Mesh (Sun Gold #FFC53D to Coral #FF7A59) */
          <div className="w-full h-full relative">
            <div className="absolute top-1/4 left-1/3 w-[600px] h-[450px] bg-gradient-to-r from-[#FFC53D]/18 to-[#FF7A59]/18 rounded-full blur-[150px]" />
          </div>
        )}

        {variant === 'paper' && (
          /* Light Paper Feel Background */
          <div className="w-full h-full bg-[#F4F5FB] dark:bg-[#0E1022] transition-colors relative">
            <div className="absolute inset-0 bg-[radial-gradient(#0A0B1E_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
          </div>
        )}

        {/* Big Outlined Faded Watermark Word */}
        {wordWatermark && (
          <div className="absolute inset-0 flex items-center justify-center select-none overflow-hidden">
            <span
              className="text-[18vw] font-black font-heading uppercase text-transparent stroke-white"
              style={{
                WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.04)',
                letterSpacing: '0.1em',
              }}
            >
              {wordWatermark}
            </span>
          </div>
        )}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Background;

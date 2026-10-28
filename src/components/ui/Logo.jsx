import React from 'react';
import { Link } from 'react-router-dom';

export function Logo({
  variant = 'full', // 'full' | 'mark-only'
  theme = 'auto',   // 'auto' | 'on-dark' | 'on-light'
  size = 'md',     // 'sm' | 'md' | 'lg'
  tagline = true,
  className = '',
  to = '/',
}) {
  const sizeMap = {
    sm: { mark: 32, textTitle: 'text-sm', textSub: 'text-[9px]', tagText: 'text-[9px]' },
    md: { mark: 40, textTitle: 'text-base', textSub: 'text-[10px]', tagText: 'text-[10px]' },
    lg: { mark: 52, textTitle: 'text-xl', textSub: 'text-xs', tagText: 'text-xs' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  const textColorClass =
    theme === 'on-light'
      ? 'text-[#0A0B1E]'
      : theme === 'on-dark'
      ? 'text-[#F4F5FB]'
      : 'text-app-text';

  const mutedColorClass =
    theme === 'on-light'
      ? 'text-[#5B607A]'
      : theme === 'on-dark'
      ? 'text-[#A4A8C4]'
      : 'text-app-muted';

  const markSvg = (
    <svg
      width={currentSize.mark}
      height={currentSize.mark}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
    >
      <defs>
        <linearGradient id="hruAuroraGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5B5BF0" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      {/* Rounded-square mark with Aurora Gradient */}
      <rect width="100" height="100" rx="26" fill="url(#hruAuroraGrad)" />
      
      {/* Subtle glass reflection edge */}
      <rect x="2" y="2" width="96" height="96" rx="24" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />

      {/* Bold White HRU Letters */}
      <text
        x="50"
        y="58"
        fill="#FFFFFF"
        fontSize="34"
        fontWeight="900"
        fontFamily="'Space Grotesk', sans-serif"
        textAnchor="middle"
        letterSpacing="-0.5"
      >
        HRU
      </text>

      {/* Sun Gold Accent Dot Underline */}
      <circle cx="50" cy="74" r="5" fill="var(--hru-gold, #FFC53D)" />
    </svg>
  );

  const content = (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {markSvg}
      {variant !== 'mark-only' && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5 leading-none">
            <span className={`font-heading font-extrabold tracking-tight ${currentSize.textTitle} ${textColorClass}`}>
              HR
            </span>
            <span className={`font-heading font-semibold tracking-[0.22em] uppercase text-app-muted ${currentSize.textSub} ${mutedColorClass}`}>
              UNIVERSITY
            </span>
          </div>
          {tagline && (
            <span className={`font-mono tracking-widest uppercase mt-1 ${currentSize.tagText} text-hru-gold font-medium`}>
              SHAPING NEXT-WAVE MINDS
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="inline-block" aria-label="HR University Home">
        {content}
      </Link>
    );
  }

  return content;
}

export default Logo;

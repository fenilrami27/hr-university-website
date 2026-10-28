import React from 'react';

export function Doodle({
  type = 'underline', // 'underline' | 'circle' | 'arrow' | 'star' | 'squiggle' | 'tape'
  color = 'var(--hru-gold)',
  className = '',
  width = 120,
  height = 24,
}) {
  switch (type) {
    case 'underline':
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 140 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible pointer-events-none ${className}`}
        >
          <path
            d="M3 13C38.5 4.5 98.2 -1.5 137 9.5M8 15.5C45.2 8.5 96.8 5.5 132 14"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'circle':
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 160 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible pointer-events-none ${className}`}
        >
          <path
            d="M18 32C12 18 38 6 82 5C132 4 154 18 152 35C149 52 110 58 64 56C24 54 4 41 8 26C11 15 28 8 52 6"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'arrow':
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 60 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible pointer-events-none ${className}`}
        >
          <path
            d="M4 22C18 14 34 16 48 24M48 24L38 12M48 24L39 34"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'star':
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible pointer-events-none ${className}`}
        >
          <path
            d="M16 2L19.5 11.5L29 13.5L22 20L24 29.5L16 24.5L8 29.5L10 20L3 13.5L12.5 11.5L16 2Z"
            fill={color}
            opacity="0.85"
          />
        </svg>
      );

    case 'squiggle':
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 100 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible pointer-events-none ${className}`}
        >
          <path
            d="M2 10Q14 2 26 10T50 10T74 10T98 10"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'tape':
      return (
        <div
          className={`w-16 h-5 bg-white/35 dark:bg-white/20 backdrop-blur-sm -rotate-6 shadow-sm border-t border-b border-white/40 ${className}`}
          style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
        />
      );

    default:
      return null;
  }
}

export default Doodle;

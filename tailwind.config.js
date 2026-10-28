/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        app: {
          DEFAULT: 'var(--bg-app)',
          surface1: 'var(--bg-surface-1)',
          surface2: 'var(--bg-surface-2)',
          border: 'var(--border-app)',
          text: 'var(--text-app-main)',
          muted: 'var(--text-app-muted)',
          subtle: 'var(--text-app-subtle)',
        },
        hru: {
          indigo: {
            DEFAULT: 'var(--hru-indigo)',
            hover: 'var(--hru-indigo-hover)',
            deep: 'var(--hru-indigo-deep)',
            glow: 'var(--hru-indigo-glow)',
          },
          midnight: {
            DEFAULT: 'var(--hru-midnight)',
            surface1: 'var(--hru-surface-1)',
            surface2: 'var(--hru-surface-2)',
          },
          gold: {
            DEFAULT: 'var(--hru-gold)',
            hover: 'var(--hru-gold-hover)',
            deep: 'var(--hru-gold-deep)',
            glow: 'var(--hru-gold-glow)',
            text: 'var(--hru-text-on-gold)',
          },
        },
        dept: {
          ai: 'var(--dept-ai)',
          pharmacy: 'var(--dept-pharmacy)',
          sports: 'var(--dept-sports)',
          design: 'var(--dept-design)',
          business: 'var(--dept-business)',
          media: 'var(--dept-media)',
          biotech: 'var(--dept-biotech)',
          architecture: 'var(--dept-architecture)',
        },
        semantic: {
          success: 'var(--semantic-success)',
          error: 'var(--semantic-error)',
          warning: 'var(--semantic-warning)',
        },
        pop: {
          coral: 'var(--pop-coral, #FF7A59)',
          gold: 'var(--pop-gold, #FFC53D)',
          mint: 'var(--pop-mint, #2DD4BF)',
          sky: 'var(--pop-sky, #22D3EE)',
          pink: 'var(--pop-pink, #F472B6)',
          lime: 'var(--pop-lime, #C6FF3D)',
          violet: 'var(--pop-violet, #A78BFA)',
          indigo: 'var(--pop-indigo, #5B5BF0)',
          ink: 'var(--pop-dark-ink, #0A0B1E)',
        },
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', '"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'aurora': 'var(--hru-aurora)',
        'aurora-glow': 'var(--hru-aurora-glow)',
        'sunrise': 'var(--hru-sunrise)',
        'sunrise-glow': 'var(--hru-sunrise-glow)',
        'pop-sunrise': 'var(--gradient-sunrise)',
        'pop-lagoon': 'var(--gradient-lagoon)',
        'pop-bubblegum': 'var(--gradient-bubblegum)',
        'pop-electric': 'var(--gradient-electric)',
        'pop-lime-pop': 'var(--gradient-lime-pop)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -4px var(--hru-gold-glow)',
        'indigo-glow': '0 0 30px -5px var(--hru-indigo-glow)',
        'sunrise-glow': '0 0 25px -4px var(--hru-sunrise-glow)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.28)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

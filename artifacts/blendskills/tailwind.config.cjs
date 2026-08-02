/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#4F7CFF',
        accent: '#8B5CF6',
        success: '#22C55E',
        warning: '#FACC15',
        background: '#09090B',
        card: '#111113',
        section: '#0F1015',
        border: 'rgba(255,255,255,0.08)',
        borderHover: 'rgba(255,255,255,0.18)',
      },
      spacing: {
        8: '8px',
        16: '16px',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
        56: '56px',
        64: '64px',
        80: '80px',
        96: '96px',
        120: '120px',
      },
      borderRadius: {
        btn: '16px',
        card: '24px',
        input: '14px',
        panel: '32px',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: ['72px', { lineHeight: '0.9', letterSpacing: '-3px', fontWeight: '800' }],
        h2: ['48px', { lineHeight: '1.1', fontWeight: '700' }],
        cardTitle: ['24px', { fontWeight: '600' }],
        paragraph: ['18px', { lineHeight: '1.7', color: '#A1A1AA' }],
        small: ['14px', {}],
        button: ['16px', { fontWeight: '600' }],
      },
      boxShadow: {
        soft: '0 30px 80px rgba(0,0,0,0.35)',
        primaryGlow: '0 0 10px #4F7CFF',
        glass: '0 20px 80px rgba(0,0,0,0.25)',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        fast: 'all 200ms ease',
        normal: 'all 350ms ease',
        slow: 'all 600ms ease',
      },
    },
  },
  plugins: [],
};

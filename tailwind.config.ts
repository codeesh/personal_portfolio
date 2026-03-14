import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInRight: {
          from: {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow:
              '0 0 20px rgba(0, 117, 255, 0.3), inset 0 0 20px rgba(0, 117, 255, 0.1)',
          },
          '50%': {
            boxShadow:
              '0 0 30px rgba(0, 117, 255, 0.5), inset 0 0 30px rgba(0, 117, 255, 0.2)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        blink: {
          '0%, 50%': {
            opacity: '1',
          },
          '51%, 100%': {
            opacity: '0',
          },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        slideDown: {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        slideDown: 'slideDown 0.5s ease-out',
      },
      colors: {
        'electric-blue': '#0075FF',
        'forest-black': '#0A0A0A',
        'pure-white': '#FFFFFF',
        'glass-bg': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;

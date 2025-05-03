/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "menu-width": "14rem",
        "menu-padding": "2rem",
      },
      fontFamily: {
        futura: ['Futura', 'sans-serif'],
      },
      fontSize: {
        '15': '15px',
        '18': '18px',
        '24': '24px',
        '40': '40px',
        '56': '56px',
        '72': '72px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '80': '80px',
        '96': '96px',
        '120': '120px',
      },
      colors: {
        'theme-green': '#2C4F40',
      },
      padding: {
        '5p': '5%',
        '8p': '8%',
        '10p': '10%',
      },
      screens: {
        tablet: '640px',
        desktop: '1024px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.theme-black'),
            fontFamily: theme('fontFamily.futura'),

            a: {
              color: theme('colors.theme-green'),
              textDecoration: 'underline',
              fontWeight: 'bold',
              '&:hover': {
                color: theme('colors.theme-white'),
                backgroundColor: theme('colors.theme-green'),
              },
            },

            h1: {
              fontSize: theme('fontSize.2xl'),
              fontWeight: 'bold',
              color: theme('colors.theme-green'),
              fontFamily: theme('fontFamily.futura'),
            },
            h2: {
              fontSize: theme('fontSize.xl'),
              fontWeight: 'bold',
              color: theme('colors.theme-green'),
              fontFamily: theme('fontFamily.futura'),
            },
            h3: {
              fontSize: theme('fontSize.lg'),
              fontWeight: 'semibold',
              color: theme('colors.theme-green'),
              fontFamily: theme('fontFamily.futura'),
            },
            h4: {
              fontSize: theme('fontSize.base'),
              fontWeight: 'medium',
              color: theme('colors.theme-green'),
              fontFamily: theme('fontFamily.futura'),
            },
            p: {
              fontSize: theme('fontSize.base'),
              lineHeight: '1.6',
              color: theme('colors.theme-black'),
            },
            ul: {
              paddingLeft: theme('spacing.4'),
              listStyleType: 'disc',
              color: theme('colors.theme-black'),
            },
            ol: {
              paddingLeft: theme('spacing.4'),
              listStyleType: 'decimal',
              color: theme('colors.theme-black'),
            },
            li: {
              marginBottom: theme('spacing.2'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    typography,
  ],
};

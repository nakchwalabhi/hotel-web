// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        testimonialNext: {
          '0%': {
            opacity: '0',
            filter: 'blur(6px)',
            transform: 'translateX(24px)',
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0)',
            transform: 'translateX(0)',
          },
        },
        testimonialPrev: {
          '0%': {
            opacity: '0',
            filter: 'blur(6px)',
            transform: 'translateX(-24px)',
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0)',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        testimonialNext: 'testimonialNext 0.5s ease-out',
        testimonialPrev: 'testimonialPrev 0.5s ease-out',
      },
    },
  },
};

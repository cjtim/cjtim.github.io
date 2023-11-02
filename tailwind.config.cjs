/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      qsan: ['Quicksand', 'sans-serif']
    },
    extend: {
      colors: {},
      keyframes: {
        // slide: {
        //   '0%': { transform: 'translateX(50vw)' },
        //   '100%': { transform: 'translateX(0)' },
        // },
        fadeFromLeft: {
          '0%': { width: "0", opacity: 0 },
          '100%': { width: "100%", opacity: 100 }
        }
      },
      animation: {
        bounce2: "bounce 2s infinite",
        // slide: 'slide 2s ease-in-out forwards',
        appearSlide: '2s fadeFromLeft 1s 1 forwards'
      }
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

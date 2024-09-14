import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-gray': '#44403c',
        'periwinkle-blue': '#6366f1',
      },
      keyframes: {
        type: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        cursor: {
          '50%': { 'border-color': 'transparent' },
        },
        'pop-up': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '60%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateX(100%)' }, // Start off-screen to the right
          '100%': { opacity: '1', transform: 'translateX(0)' }, // End at its original position
        },
      },
      animation: {
        type: 'type 0.5s steps(90) 0.5s 1 both, cursor 1s step-end infinite',
        'pop-up': 'pop-up 0.1s ease-out both',
        'fade-in': 'fade-in 0.1s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;

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
        primary: {
          bg: "var(--background)",
          text: "var(--text)"
        },
        secondary: {
          bg: "var(--background-secondary)",
          text: "var(--text-secondary)"
        },
        tertiary: {
          bg: "var(--background-tertiary)",
          text: "var(--text-tertiary)"
        },
        danger: {
          bg: "var(--background-danger)",
          border: "var(--border-danger)"
        }
      },
      animation: {
        loading_dots: 'loading_dots .9s infinite linear'
      },
      keyframes: {
        loading_dots: {
          '0%': { 'transform': 'scale(1)' },
          '50%': { 'transform': 'scale(0.7)' },
          '100%': { 'transform': 'scale(1)' },
        },
      },
      boxShadow: {
        'input': 'inset 0 1px 2px hsla(0, 0%, 0%, 0.2), 0 -1px 1px #202225, 0 1px 0 #2a2d32'
      }
    },
  },
  plugins: [],
};
export default config;

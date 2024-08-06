import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        "loop-scroll":"loop-scroll 40s linear infinite",
      },
      keyframes:{
        "loop-scroll":{
          from: { transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"},
        }
      },
      colors: {
        lightGreen: '#fff',
        mediumGreen: '#9CDBA6',
        darkGreen: '#50B498',
        teal: '#468585',
          primary: {
            100: '#E6E6E6',
            200: '#4B5563',
            300: '#374151',
            400: '#1F2937',
            500: '#111827',
          },
          accent: {
            100: '#E0F7FA',
            200: '#00BCD4',
            300: '#00838F',
          },
          background: {
            default: 'rgba(0, 0, 0, 0.3)', // bg-opacity-30
            card: 'rgba(17, 24, 39, 0.8)', // slightly transparent dark color
          },
        },
        backdropBlur: {
          xs: '2px',
          sm: '4px',
        },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

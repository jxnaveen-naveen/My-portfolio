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
        background: "#0B1120",
        primary: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
        },
        secondary: {
          DEFAULT: "#7C3AED",
          hover: "#6D28D9",
        },
        accent: {
          DEFAULT: "#06B6D4",
          hover: "#0891B2",
        },
        dataGreen: {
          DEFAULT: "#22C55E",
          hover: "#16A34A",
        },
        muted: "#94A3B8",
        glass: {
          card: "rgba(255, 255, 255, 0.08)",
          cardHover: "rgba(255, 255, 255, 0.12)",
          border: "rgba(255, 255, 255, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      boxShadow: {
        neon: "0 0 25px rgba(79, 70, 229, 0.35)",
        cyanNeon: "0 0 25px rgba(6, 182, 212, 0.35)",
        purpleNeon: "0 0 25px rgba(124, 58, 237, 0.35)",
        greenNeon: "0 0 25px rgba(34, 197, 94, 0.35)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'aurora': 'linear-gradient(135deg, rgba(79,70,229,0.15) 0%, rgba(124,58,237,0.15) 50%, rgba(6,182,212,0.15) 100%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s infinite alternate',
        'aurora-flow': 'auroraFlow 12s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        auroraFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

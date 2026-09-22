/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-elevated": "var(--bg-elevated)",
        surface: "var(--surface)",
        border: "var(--border)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        signal: "var(--signal)",
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

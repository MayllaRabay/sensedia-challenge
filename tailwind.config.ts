const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        sm: "6px",
        md: "12px"
      },

      colors: {
        primary: "#1A2B4A",
        "primary-light": "#2D4A7A",
        accent: "#E8734A",
        surface: "#F7F8FA",
        "text-primary": "#1A1A2E",
        "text-secondary": "#6B7280",
        border: "#E2E5EA",
        danger: "#DC2626"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },

      fontSize: {
        h1: [
          "24px",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }
        ],
        body: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        caption: ["12px", { letterSpacing: "0.05em", fontWeight: "500" }]
      },

      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px"
      }
    }
  },
  plugins: []
}

export default config

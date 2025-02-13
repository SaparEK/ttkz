/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  // Указываем пути к файлам, в которых будут использоваться классы Tailwind
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}', // Для папки app, если вы используете его в Next.js 13
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: "#141413",
        // secondary: "#828179",
        // accent: "#8989DE",
        primary: {
          DEFAULT: "#e63946",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
          foreground: "#1a1a1a",
        },
        accent: {
          DEFAULT: "#e63946",
          foreground: "#ffffff",
        },
        neutral: {
          50: "#FAFAF8",
          100: "#F0EFEA",
          200: "#E6E4DD",
          300: "#C4C3BB",
          400: "#A3A299",
          500: "#605F5B",
          600: "#3A3935",
          700: "#23241F",
          800: "#005069",
          900: "#141413",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Пример анимаций
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        "fade-in": {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        "slide-in": {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        "slide-out": {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        "fade-in-chat": {
          "0%": {opacity: "0", transform: "translateX(20px)"},
          "100%": {opacity: "1", transform: "translateX(0)"},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "slide-out": "slide-out 0.3s ease-out",
        "fade-in-chat": "fade-in-chat 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
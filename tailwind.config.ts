import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
    "./index.html",
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
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in-right": {
          from: {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-left": {
          from: {
            opacity: "0",
            transform: "translateX(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "scale-in": {
          from: {
            opacity: "0",
            transform: "scale(0.8)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "text-focus": {
          "0%": {
            filter: "blur(12px)",
            opacity: "0",
          },
          "100%": {
            filter: "blur(0)",
            opacity: "1",
          },
        },
        "underline-expand": {
          "0%": {
            transform: "scaleX(0)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "zoom": {
          "0%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "heartbeat": {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.9" },
        },
        "typewriter": {
    from: { width: "0" },
    to: { width: "100%" },
  },
  "blink": {
    "50%": { "border-color": "transparent" },
  },
  "slide-lift": {
    from: { transform: "translateY(30px)", opacity: "0" },
    to: { transform: "translateY(0)", opacity: "1" },
  },
  "slide-glow": {
    from: { transform: "translateY(30px)", opacity: "0", filter: "drop-shadow(0 0 0 rgba(59,130,246,0))" },
    to: { transform: "translateY(0)", opacity: "1", filter: "drop-shadow(0 0 20px rgba(59,130,246,0.6))" },
  },
  "rise": {
    from: { transform: "translateY(15px)", opacity: "0" },
    to: { transform: "translateY(0)", opacity: "1" },
  },
  "bounce-in": {
    "0%": { transform: "scale(0.3)", opacity: "0" },
    "50%": { transform: "scale(1.05)" },
    "70%": { transform: "scale(0.9)" },
    "100%": { transform: "scale(1)", opacity: "1" },
  },
  "pop": {
    "0%": { transform: "scale(0.8)", opacity: "0" },
    "100%": { transform: "scale(1)", opacity: "1" },
  },
  "scale-float": {
    "0%": { transform: "scale(0.9) translateY(10px)", opacity: "0" },
    "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
  },
  "flip-in": {
    from: { transform: "perspective(400px) rotateY(90deg)", opacity: "0" },
    to: { transform: "perspective(400px) rotateY(0)", opacity: "1" },
  },
  "slide-glow-border": {
    from: { "border-color": "transparent", "box-shadow": "0 0 0 rgba(59,130,246,0)" },
    to: { "border-color": "#3b82f6", "box-shadow": "0 0 20px rgba(59,130,246,0.4)" },
  },
  "marquee": {
    from: { transform: "translateX(0)" },
    to: { transform: "translateX(-50%)" },
  },
  "ping": {
    "75%, 100%": { transform: "scale(2)", opacity: "0" },
  },
  "star-twinkle": {
    "0%, 100%": { opacity: "0.4", transform: "scale(0.8)" },
    "50%": { opacity: "1", transform: "scale(1.2)" },
  },
      },
      transitionDelay: {
        '400': '400ms',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.8s ease-out",
        "slide-in-left": "slide-in-left 0.8s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
        "text-focus": "text-focus 1.5s ease-out",
        "fade-in-delay": "fade-in-up 1s ease-out 0.3s both",
        "slide-up-delay": "fade-in-up 1s ease-out 0.6s both",
        "underline-expand": "underline-expand 1s ease-out 1s both",
        "float": "float 3s ease-in-out infinite",
        "zoom": "zoom 20s ease-out forwards",
        "heartbeat": "heartbeat 2s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "scale-in-delay-0": "scale-in 0.6s ease-out 0s both",
        "scale-in-delay-1": "scale-in 0.6s ease-out 0.1s both",
        "scale-in-delay-2": "scale-in 0.6s ease-out 0.2s both",
        "scale-in-delay-3": "scale-in 0.6s ease-out 0.3s both",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
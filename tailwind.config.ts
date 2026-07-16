import type { Config } from "tailwindcss";
import { tokens } from "./src/tokens";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: tokens.colors.bg,
        surface: tokens.colors.surface,
        "surface-2": tokens.colors["surface-2"],
        border: tokens.colors.border,
        "border-strong": tokens.colors["border-strong"],
        accent: tokens.colors.accent,
        "accent-soft": tokens.colors["accent-soft"],
        ink: tokens.colors.ink,
        muted: tokens.colors.muted,
        dim: tokens.colors.dim,
        gold: tokens.colors.gold,
      },
      fontFamily: {
        sans: ["var(--font-body)", ...tokens.typography.bodyStack],
        display: ["var(--font-display)", ...tokens.typography.displayStack],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.1em" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        "display-sm": ["1.875rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-md": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.04em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.04em" }],
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.04em" }],
        metric: ["1.875rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "metric-lg": ["2.25rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
      } as const,
      letterSpacing: tokens.typography.tracking as Record<string, string>,
      borderRadius: tokens.radius,
      boxShadow: tokens.shadows,
      zIndex: tokens.zIndex,
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 1rem rgba(129,140,248,0.65)" },
          "50%": { opacity: "0.6", boxShadow: "0 0 0.25rem rgba(129,140,248,0.35)" },
        },
        "sweep-down": {
          "0%": { opacity: "0", transform: "translateY(-0.5rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "sweep-down": "sweep-down 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;

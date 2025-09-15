// tailwind.config.ts
import type { Config } from "tailwindcss"

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0D4F8B", // 信頼感ある青
          light: "#1E73BE",
          dark: "#093566",
        },
        accent: {
          DEFAULT: "#FF8C42", // CTAで目立たせる暖色
          light: "#FFA564",
          dark: "#E67328",
        },
        background: "#F8F9FA", // 白に近いグレーで清潔感
      },
    },
  },
}
export default config

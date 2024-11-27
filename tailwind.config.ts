import type {Config} from "tailwindcss";
import {nextui} from "@nextui-org/react";

export default {
    content: [
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [
        nextui({
            prefix: "nextui", // prefix for themes variables
            addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
            defaultTheme: "dark", // default theme from the themes object
            defaultExtendTheme: "light", // default theme to extend on custom themes
            layout: {}, // common layout tokens (applied to all themes)
            themes: {
                light: {
                    layout: {}, // light theme layout tokens
                    colors: {}, // light theme colors
                },
                dark: {
                    layout: {}, // dark theme layout tokens
                    colors: {}, // dark theme colors
                },
                // ... custom themes
            },
        })
    ],
} satisfies Config;

import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        dancingScript: ["var(--font-dancing-script)"],
        nunito: ["var(--font-nunito)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "mytheme",
    themes: {
      mytheme: {
        extend: "light",
        colors: {
          
          primary: {
            DEFAULT: "#533833", // Tom principal marrom escuro
            50: "#F1E9E7",  // Tom muito claro
            100: "#E2D3CF",
            200: "#C4A79F",
            300: "#A67C70",
            400: "#885140",
            500: "#533833",  // Tom base
            600: "#3F2B26",
            700: "#2B1D1A",
            800: "#1A110F",
            900: "#0A0505",  // Mais escuro
          },

          secondary: {
            DEFAULT: "#ee4e4e", // Tom vermelho romântico
            50: "#FDEDED", // Tom claro
            100: "#FCDADA",
            200: "#F9B5B5",
            300: "#F58F8F",
            400: "#F26A6A",
            500: "#ee4e4e", // Tom base
            600: "#D34343",
            700: "#A73535",
            800: "#7A2828",
            900: "#4D1A1A", // Tom mais escuro
          },

          tertiary: { 
            DEFAULT: "#a4b4d8", // Azul suave
            50: "#F5F7FB", // Claro
            100: "#E9ECF6",
            200: "#D4D9EC",
            300: "#BEC5E2",
            400: "#A9B2D9",
            500: "#a4b4d8", // Base
            600: "#7A8DB8",
            700: "#5A6989",
            800: "#3A4559",
            900: "#1A202A", // Escuro
          },

          background: {
            DEFAULT: "#f2c2cd", // Rosa claro como fundo
            foreground: "#533833" // Texto marrom escuro
          },

          focus: "#ee4e4e", // Mantendo o vermelho para destaque
        }
      },
    },
  })],
}

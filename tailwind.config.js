import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
export default {
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
        roboto: ["var(--font-roboto)"],
        mindset: ["Mindset"],
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
            50: "#98665D",  // Tom muito claro
            100: "#8B5D55",
            200: "#7E554E",
            300: "#724C46",
            400: "#65443E",
            500: "#533833",  // Tom base
            600: "#4C332F",
            700: "#3F2A27",
            800: "#33221F",
            900: "#261917",  // Mais escuro
          },

          secondary: {
            DEFAULT: "#ee4e4e", // Tom vermelho romântico
            50: "#F8B5B5", // Tom claro
            100: "#F6A2A2",
            200: "#f49090",
            300: "#f27d7d",
            400: "#f06a6a",
            500: "#ee4e4e", // Tom base
            600: "#ED4545",
            700: "#EB3333",
            800: "#E92020",
            900: "#DF1616", // Tom mais escuro
          },

          default: { 
            DEFAULT: "#a4b4d8", // Azul suave
            50: "#F1F3F9", // Claro
            100: "#E2E7F3",
            200: "#D4DCED",
            300: "#C6D0E7",
            400: "#B8C4E0",
            500: "#a4b4d8", // Base
            600: "#9BACD4",
            700: "#8DA0CE",
            800: "#7E95C8",
            900: "#7089C2", // Escuro
          },

          background: {
            DEFAULT: "#EADBD4", // Rosa claro como fundo
            foreground: "#533833", // Texto marrom escuro
            rosa: "#FCDADA",
          },

          focus: "#ee4e4e", // Mantendo o vermelho para destaque
          
        }
      },
    },
  })],
}

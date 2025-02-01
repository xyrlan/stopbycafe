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
            DEFAULT: "#4A2F2A", // Tom principal marrom escuro ajustado
            50: "#8C5B54",  // Tom muito claro ajustado
            100: "#7F5149",
            200: "#724740",
            300: "#653D37",
            400: "#58362E",
            500: "#4A2F2A",  // Tom base mais escuro
            600: "#3D2522",
            700: "#301C1A",
            800: "#231412",
            900: "#160C0A",  // Mais escuro
          },

          secondary: {
            DEFAULT: "#E83939", // Tom vermelho mais intenso
            50: "#FCD5D5", // Tom claro ajustado
            100: "#FAB8B8",
            200: "#F69B9B",
            300: "#F27E7E",
            400: "#EE5B5B",
            500: "#E83939", // Tom base mais intenso
            600: "#D42727",
            700: "#B31F1F",
            800: "#921919",
            900: "#711313", // Tom mais escuro
          },

          default: { 
            DEFAULT: "#95A7CF", // Azul suave ajustado
            50: "#FFFFFF",
            100: "#F5F7FB",
            200: "#E1E7F3",
            300: "#CDD7EB",
            400: "#B9C7E3",
            500: "#95A7CF", // Base ajustada
            600: "#7B91C3",
            700: "#617BB7",
            800: "#4B669F",
            900: "#3B5080", // Escuro ajustado
          },

          background: {
            DEFAULT: "#F2E5E0", // Rosa claro ajustado
            foreground: "#4A2F2A", // Texto marrom escuro ajustado
            rosa: "#FFE8E8", // Rosa mais suave
          },

          focus: "#ee4e4e", // Mantendo o vermelho para destaque
          
        }
      },
    },
  })],
}

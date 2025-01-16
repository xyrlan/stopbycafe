import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Dancing_Script as FontDancingScript,
  Nunito as FontNunito,
  Roboto as FontRoboto,
} from "next/font/google";

export const fontRoboto = FontRoboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontDancingScript = FontDancingScript({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export const fontNunito = FontNunito({
  subsets: ["latin"],
  fallback: ["Inter", "sans-serif", "Nunito Sans"],
  variable: "--font-nunito",
});

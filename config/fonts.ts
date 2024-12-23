import { Fira_Code as FontMono, Inter as FontSans, Dancing_Script as FontDancingScript, Nunito as FontNunito  } from "next/font/google";

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
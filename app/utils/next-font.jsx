/* Polices d'écriture avec next/font */
import { Coming_Soon, Licorice } from "next/font/google";

export const comingSoon = Coming_Soon({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-coming-soon",
});

export const licorice = Licorice({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-licorice",
});

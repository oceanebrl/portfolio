"use client";
/* Styles */
import "./styles/base/globals.css";

/* Components */
import Header from "./components/Header";
import { StrictMode } from "react";

/* Polices */
import { comingSoon, licorice } from "./utils/next-font";

/* Métadonnées */
export const metadata = {
   title: "Océane Burel",
   description: "Mon portfolio",
   // Voir pour le favicon par la suite
};

/* Root */
export default function RootLayout({ children }) {
   return (
      <StrictMode>
         <html lang="fr">
            <body className={`${comingSoon.variable} ${licorice.variable}`}>
               <Header />
               {children}
            </body>
         </html>
      </StrictMode>
   );
}

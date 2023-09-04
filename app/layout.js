"use client";
/* Styles */
import "./styles/base/globals.css";

/* Components */
import Header from "./components/Header";
import { StrictMode } from "react";

/* Polices */
import { comingSoon, licorice } from "./utils/next-font";

/* Root */
export default function RootLayout({ children }) {
  return (
    <StrictMode>
      <html lang="fr">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Océane Burel</title>
        </head>
        <body className={`${comingSoon.variable} ${licorice.variable}`}>
          <Header />
          {children}
        </body>
      </html>
    </StrictMode>
  );
}

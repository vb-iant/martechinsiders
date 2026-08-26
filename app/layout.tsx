import type { Metadata } from "next";
import { Space_Grotesk, Lato } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Martech Insiders™",
  description: "Martech Insiders — coming soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, Lato, Manrope, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const GTM_ID = "GTM-KV2KL3XD";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-lato",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Martech Insiders™",
  description:
    "Martech Insiders helps CMS and DXP buyers and vendors make better decisions through experienced, independent advice from practitioners who have spent decades inside the category.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${lato.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <Script id="consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied'
          });
          (function() {
            var match = document.cookie.match(/(?:^|;\\s*)site-consent-v1=(accepted|rejected)/);
            if (match) {
              var state = match[1] === 'accepted' ? 'granted' : 'denied';
              gtag('consent', 'update', {
                analytics_storage: state,
                ad_storage: state
              });
            }
          })();
        `}
      </Script>
      <GoogleTagManager gtmId={GTM_ID} />
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

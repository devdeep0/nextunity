
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import './global.css'

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflow: "hidden", height: "100%" }}>
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={inter.className}
        style={{ overflow: "hidden", height: "100%", margin: 0 }}
      >
        {children}
      </body>
    </html>
  );
}

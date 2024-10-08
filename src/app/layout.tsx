
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import './global.css'
import ConditionalLayout from "@/components/ConditionalLayout";
const inter = Inter({ subsets: ["latin"] });
import React,{ Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" style={{ overflow: "auto", height: "100%" }}>
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={inter.className}
        style={{ overflow: "auto", height: "100%", margin: 0 }}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <ConditionalLayout>{children}</ConditionalLayout>
        </Suspense>
      </body>
    </html>
  );
}

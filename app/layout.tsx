import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import GTag from "@src/components/scripts/GTag";
import GAdsense from "@src/components/scripts/GAdsense";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Valentine",
  description: "dishyyyy",
  verification: {
    google: "tBMC6Cdldk7qGoDdcdwwvKPBSiRURtd02xVU9AO4kxw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GAdsense />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <GTag />
      </body>
    </html>
  );
}

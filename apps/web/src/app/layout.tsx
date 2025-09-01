import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "BlurFin",
  description: "원하는 관상어를 찾아보세요.",
  icons: {
    icon: '/images/BlurFin_Icon.png',
  },
  openGraph: {
    title: "BlurFin",
    description: "원하는 관상어를 찾아보세요.",
    images: [
      {
        url: '/images/BlurFin_OG.png',
        width: 1200,
        height: 630,
        alt: 'BlurFin - 원하는 관상어를 찾아보세요',
      },
      {
        url: '/images/BlurFin_OG_Small.png',
        width: 600,
        height: 315,
        alt: 'BlurFin - 원하는 관상어를 찾아보세요',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BlurFin",
    description: "원하는 관상어를 찾아보세요.",
    images: ['/images/BlurFin_OG.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

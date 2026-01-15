import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../src/components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nue4k | Personal Portfolio",
  description: "Personal portfolio of Akhmad Zaki Hasrul - Informatics Engineering Student at Hasanuddin University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-300 dark:bg-slate-950 text-stone-800 dark:text-slate-100`}
      >

        <Navbar />
        {children}
      </body>
    </html>
  );
}

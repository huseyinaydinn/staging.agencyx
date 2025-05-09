"use client";

import { useState, useEffect } from "react";
import Head from "next/head"; // Meta bilgileri için Head bileşeni
import Loader from "../components/Loader";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader'ı 2 saniye sonra kaldır
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer); // Temizlik işlemi
  }, []);

  if (loading) {
    // Yükleme sırasında sadece Loader'ı göster
    return (
      <html lang="en">
        <body className="antialiased">
          <Loader />
        </body>
      </html>
    );
  }

  // Yükleme tamamlandıktan sonra normal içeriği göster
  return (
    <html lang="en">
      <Head>
        <title>Staging Agencyx</title>
        <meta name="description" content="Staging Agencyx" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased cursor-[url('/customCursor.png'),_auto]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

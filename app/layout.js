"use client";

import { useState, useEffect } from "react";
import Head from "next/head"; // Meta bilgileri için Head bileşeni
import Loader from "../components/Loader";
import { Cabin } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/page";



const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  display: 'swap',
});

import ScrollToTopButton from '../components/ScrollToTopButton';

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
        className={`${cabin.variable} antialiased cursor-[url('/customCursor.png'),_auto]`}
      >
        <Navbar />
        {children}
      <ScrollToTopButton />
      </body>
    </html>
  );
}

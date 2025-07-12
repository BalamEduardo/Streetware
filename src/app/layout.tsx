import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sedgwick_Ave_Display } from "next/font/google";
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sedgwickAve = Sedgwick_Ave_Display({
  variable: "--font-sedgwick-ave",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Streetware - Drop Season",
  description: "Ropa y arte de edición limitada. Cada drop cuenta una historia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} ${sedgwickAve.variable}`}>
      <body className="bg-brand text-white">
        <Navbar />
        {/* Padding para que el contenido no quede debajo del navbar fijo */}
        <main className="min-h-screen">{children}</main>
        
        <Footer />
      </body>
    </html>

    
  );
}

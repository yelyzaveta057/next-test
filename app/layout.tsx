import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import TanStackProvider from "@/components/header/TanStackProvider/TanStackProvider";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Made by Lisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
              <TanStackProvider>
        <Header />

        <main>{children}</main>
        <footer>
        
          <p>
            Created by Lisa <time dateTime ='2025'>2025</time>
          </p>
        </footer>
        </TanStackProvider>
      </body>
    </html>
  );
}

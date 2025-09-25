// app/layout.tsx
import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

import CardProfile from "@/components/cardprofile";
import Sidebar from "@/components/sidebar";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "My Phatcharapol App",
  description: "My personal website",
  keywords: ["Phatcharapol", "Portfolio", "Next.js", "React"],
  icons: { icon: "/sNsdLy01.svg" },
  authors: [{ name: "Phatcharapol Sakulnoon", url: "https://www.phatcharapol.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${libreFranklin.variable} antialiased bg-gray-900 text-white`}>
        <div className="flex min-h-screen px-10 py-6">
        
          
          
          <main className="flex-1">
            {children}
          </main>

        
          
        </div>
      </body>
    </html>
  );
}

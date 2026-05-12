import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-dm-sans" 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-dmSans min-h-screen relative">
        {/* Background Image Overlay */}
        <div className="fixed inset-0 z-[-1] bg-[#f0f4f8]/90 backdrop-blur-[1px]" />
        {children}
      </body>
    </html>
  );
}
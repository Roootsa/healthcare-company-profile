import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css"; // 

export const metadata: Metadata = {
  title: "MediCare Startup",
  description: "Healthcare startup company profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        {/* HEADER */}
      <header className="bg-blue-600 text-white shadow-md">
       <nav className="flex justify-between items-center max-w-5xl mx-auto p-4">
        <h1 className="font-bold text-xl tracking-wide">MediCare</h1>
   <div className="flex gap-6 text-sm font-medium">
      <Link href="/" className="hover:text-blue-200">Home</Link>
      <Link href="/about" className="hover:text-blue-200">About</Link>
      <Link href="/services" className="hover:text-blue-200">Services</Link>
      <Link href="/contact" className="hover:text-blue-200">Contact</Link>
    </div>
  </nav>
</header>

        {/* MAIN CONTENT */}
        <main className="flex-grow max-w-5xl mx-auto p-4">
          {children}
        </main>

        {/* FOOTER */}
       <footer className="bg-white border-t text-center p-4 text-sm text-gray-500">
       © 2026 MediCare Startup. All rights reserved.
      </footer>

      </body>
    </html>
  );
}

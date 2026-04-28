import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>

        {/* HEADER */}
        <header style={{ background: "#2563eb", color: "white" }}>
          <nav
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "900px",
              margin: "auto",
              padding: "15px",
            }}
          >
            <h1 style={{ fontWeight: "bold" }}>MediCare</h1>

            <div style={{ display: "flex", gap: "15px" }}>
              <Link href="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
              <Link href="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
              <Link href="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link>
              <Link href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
            </div>
          </nav>
        </header>

        {/* MAIN */}
        <main
          style={{
            maxWidth: "900px",
            margin: "auto",
            padding: "40px 20px",
            minHeight: "80vh",
            textAlign: "center",
          }}
        >
          {children}
        </main>

        {/* FOOTER */}
        <footer
          style={{
            textAlign: "center",
            padding: "15px",
            background: "#f1f5f9",
          }}
        >
          © 2026 MediCare Startup. All rights reserved.
        </footer>

      </body>
    </html>
  );
}

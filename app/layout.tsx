import type { Metadata } from "next";

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
      <body>
        {children}
      </body>
    </html>
  );
}
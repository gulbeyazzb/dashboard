import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "../styles/globals.css";

const hk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rising Dashboard Case",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hk.className}>{children}</body>
    </html>
  );
}

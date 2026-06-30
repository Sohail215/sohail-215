import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Zorielle Luxury Villa | Udaipur",
  description:
    "Experience luxury, comfort and privacy at Zorielle Luxury Villa, Udaipur. Private pool villa with premium hospitality.",
  keywords: [
    "Luxury Villa Udaipur",
    "Private Pool Villa",
    "Luxury Stay Rajasthan",
    "Zorielle Hospitality",
  ],
  authors: [{ name: "Zorielle Hospitality" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
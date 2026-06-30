import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zorielle Luxury Villa | Luxury Pool Villa in Udaipur",
  description:
    "Experience a premium luxury pool villa in Udaipur with private pool, mountain views, elegant interiors and unforgettable stays.",
  keywords: [
    "Luxury Villa Udaipur",
    "Pool Villa Udaipur",
    "Private Villa",
    "Zorielle Villa",
    "Luxury Stay Rajasthan",
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
        className={`${inter.variable} ${cormorant.variable} bg-[#081C3A] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
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
  metadataBase: new URL("https://sohail-215.vercel.app"),

  title: {
    default: "Zorielle Luxury Villa | Luxury Pool Villa in Udaipur",
    template: "%s | Zorielle Luxury Villa",
  },

  description:
    "Experience luxury stays at Zorielle Luxury Villa in Udaipur with a private swimming pool, mountain views, premium interiors, and unforgettable hospitality.",

  keywords: [
    "Luxury Villa Udaipur",
    "Pool Villa Udaipur",
    "Private Villa Rajasthan",
    "Zorielle Luxury Villa",
    "Villa Booking",
    "Luxury Stay Udaipur",
  ],

  authors: [
    {
      name: "Zorielle Hospitality",
    },
  ],

  creator: "Zorielle Hospitality",

  openGraph: {
    title: "Zorielle Luxury Villa",
    description:
      "Luxury Private Pool Villa in Udaipur.",
    url: "https://sohail-215.vercel.app",
    siteName: "Zorielle Luxury Villa",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Zorielle Luxury Villa",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zorielle Luxury Villa",
    description: "Luxury Pool Villa in Udaipur",
    images: ["/images/hero.jpeg"],
  },

  icons: {
    icon: "/icon.png",
  },
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
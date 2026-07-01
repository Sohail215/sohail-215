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
    default: "Zorielle Villa Udaipur | Luxury Private Pool Villa",
    template: "%s | Zorielle Villa Udaipur",
  },

  description:
    "Experience a luxurious stay at Zorielle Villa Udaipur featuring a private swimming pool, elegant interiors, breathtaking Aravalli views, and premium hospitality.",

  keywords: [
    "Zorielle Villa Udaipur",
    "Luxury Villa Udaipur",
    "Private Pool Villa Udaipur",
    "Luxury Stay Udaipur",
    "Villa Booking Udaipur",
    "Private Villa Rajasthan",
    "Holiday Villa Udaipur",
    "Weekend Stay Udaipur",
    "Luxury Homestay Udaipur",
    "Family Villa Udaipur",
  ],

  authors: [
    {
      name: "Zorielle Hospitality",
    },
  ],

  creator: "Zorielle Hospitality",

  publisher: "Zorielle Hospitality",

  applicationName: "Zorielle Villa Udaipur",

  category: "Luxury Villa",

  openGraph: {
    title: "Zorielle Villa Udaipur",
    description:
      "Luxury Private Pool Villa in Udaipur with elegant interiors, private swimming pool and premium hospitality.",
    url: "https://sohail-215.vercel.app",
    siteName: "Zorielle Villa Udaipur",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Zorielle Villa Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zorielle Villa Udaipur",
    description:
      "Luxury Private Pool Villa in Udaipur",
    images: ["/images/hero.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
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
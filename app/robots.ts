import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/_next/",
      ],
    },

    sitemap: "https://sohail-215.vercel.app/sitemap.xml",

    host: "https://sohail-215.vercel.app",
  };
}
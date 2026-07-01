import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zorielle Villa Udaipur",
    short_name: "Zorielle Villa",
    description:
      "Luxury Private Pool Villa in Udaipur managed by Zorielle Hospitality.",

    start_url: "/",

    display: "standalone",

    background_color: "#081C3A",

    theme_color: "#D4AF37",

    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
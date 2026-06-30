"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "/images/hero.jpeg", title: "Luxury Villa" },
  { src: "/images/exterior view.jpeg", title: "Exterior View" },
  { src: "/images/pool.jpeg", title: "Private Swimming Pool" },
  { src: "/images/g.f. hall.jpeg", title: "Living Hall" },
  { src: "/images/drawing-room.jpeg", title: "Drawing Room" },
  { src: "/images/room1.jpeg", title: "Luxury Bedroom" },
  { src: "/images/room2.jpeg", title: "Premium Bedroom" },
  { src: "/images/pool.jpeg", title: "Pool View" },
  { src: "/images/balcony.jpeg", title: "Balcony View" },
  { src: "/images/bathroom1.jpeg", title: "Luxury Bathroom" },
  { src: "/images/bathroom2.jpeg", title: "Modern Bathroom" },
  { src: "/images/bathroom 3.jpeg", title: "Premium Bathroom" },
];

export default function GallerySection() {
  const [index, setIndex] = useState(-1);

  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-[#081C3A] to-[#10284D]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[8px] text-yellow-400 text-center">
          Gallery
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-center mt-4">
          Discover Zorielle Luxury Villa
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mt-5 mb-16">
          Explore every corner of our luxury villa with private pool,
          elegant interiors and premium amenities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setIndex(i)}
              className="relative h-[320px] rounded-3xl overflow-hidden cursor-pointer group border border-yellow-500/20 shadow-2xl"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-white">
                    {image.title}
                  </h3>

                  <p className="text-yellow-400 mt-2">
                    Click to View
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={images.map((img) => ({
            src: img.src,
          }))}
        />

      </div>

    </section>
  );
}
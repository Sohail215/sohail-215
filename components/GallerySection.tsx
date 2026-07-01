"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const images = [
  "/images/hero.jpeg",
  "/images/exterior view.jpeg",
  "/images/pool.jpeg",
  "/images/g.f. hall.jpeg",
  "/images/room1.jpeg",
  "/images/room2.jpeg",
  "/images/bedroom.jpeg",
  "/images/kitchen.jpeg",
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="bg-[#081C3A] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-yellow-400 text-center">
          Gallery
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Explore Zorielle
        </h2>

        <p className="text-gray-300 text-center mt-5 max-w-2xl mx-auto">
          Discover every corner of our luxury private pool villa through our
          beautiful gallery.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {images.map((image, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              onClick={() => setSelectedImage(image)}
              className="relative h-72 rounded-3xl overflow-hidden cursor-pointer group border border-white/10 hover:border-yellow-400"
            >

              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />

            </motion.div>

          ))}

        </div>

      </div>

      {/* Lightbox */}

      {selectedImage && (

        <div
          className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-6"
        >

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 bg-white/10 hover:bg-yellow-500 text-white hover:text-black p-3 rounded-full transition"
          >
            <X size={30} />
          </button>

          <div className="relative w-full max-w-6xl h-[85vh]">

            <Image
              src={selectedImage}
              alt="Gallery"
              fill
              className="object-contain rounded-2xl"
            />

          </div>

        </div>

      )}

    </section>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  {
    src: "/images/hero.jpeg",
    title: "Luxury Villa",
  },
  {
    src: "/images/exterior view.jpeg",
    title: "Exterior View",
  },
  {
    src: "/images/pool.jpeg",
    title: "Private Swimming Pool",
  },
  {
    src: "/images/g.f hall.jpeg",
    title: "Living Hall",
  },
  {
    src: "/images/drawing-room.jpeg",
    title: "Drawing Room",
  },
  {
    src: "/images/room1.jpeg",
    title: "Luxury Bedroom",
  },
  {
    src: "/images/room2.jpeg",
    title: "Premium Bedroom",
  },
  {
    src: "/images/room2.0.2.jpeg",
    title: "Pool View Bedroom",
  },
  {
    src: "/images/balcony.jpeg",
    title: "Balcony View",
  },
  {
    src: "/images/bathroom1.jpeg",
    title: "Luxury Bathroom",
  },
  {
    src: "/images/bathroom2.jpeg",
    title: "Modern Bathroom",
  },
  {
    src: "/images/bathroom 3.jpeg",
    title: "Premium Bathroom",
  },
];

export default function GallerySection() {

  const [index, setIndex] = useState(-1);

  return (

    <section
      id="gallery"
      className="bg-[#081C3A] py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-yellow-400 text-center">
          Gallery
        </p>

        <h2 className="text-5xl font-bold text-center mt-4 mb-16">
          Explore The Villa
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((image, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
              }}
              className="relative h-80 rounded-3xl overflow-hidden cursor-pointer group"
              onClick={() => setIndex(i)}
            >

              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">

                <div className="p-6">

                  <h3 className="text-white text-2xl font-bold">

                    {image.title}

                  </h3>

                </div>

              </div>

            </motion.div>

          ))}

        </div>        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={images.map((image) => ({
            src: image.src,
          }))}
        />

      </div>

    </section>
  );
}
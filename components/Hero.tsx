"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  Waves,
  ChevronDown,
  Star,
} from "lucide-react";

const images = [
  "/images/hero.jpeg",
  "/images/exterior view.jpeg",
  "/images/pool.jpeg",
  "/images/g.f. hall.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="Luxury Villa"
          fill
          priority
          className={`absolute object-cover transition-opacity duration-[1800ms] ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#081C3A]/90 via-black/55 to-black/60" />

      <div className="relative z-20 flex items-center min-h-screen">

        <div className="max-w-7xl mx-auto w-full px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <div className="flex items-center gap-2 text-yellow-400 mb-6">

              <Star size={18} fill="#D4AF37" />

              <span className="uppercase tracking-[6px] text-sm">
                Managed by Zorielle Hospitality
              </span>

            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
              Luxury Pool Villa
              <br />
              in Udaipur
            </h1>

            <p className="mt-6 max-w-2xl text-gray-300 text-base md:text-lg leading-8">
              Discover elegance, privacy and unforgettable luxury
              experiences with your family and friends.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <div className="glass rounded-full px-5 py-3 flex items-center gap-2">

                <MapPin size={18} className="text-yellow-400" />

                <span>Udaipur</span>

              </div>

              <div className="glass rounded-full px-5 py-3 flex items-center gap-2">

                <Users size={18} className="text-yellow-400" />

                <span>6–8 Guests</span>

              </div>

              <div className="glass rounded-full px-5 py-3 flex items-center gap-2">

                <Waves size={18} className="text-yellow-400" />

                <span>Private Pool</span>

              </div>

            </div>            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <a
                href="https://wa.me/918619985400"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full transition duration-300 text-center"
              >
                Book Entire Villa
              </a>

              <a
                href="#gallery"
                className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full transition duration-300 text-center"
              >
                Explore Gallery
              </a>

            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl">

              <div className="glass rounded-2xl p-4">

                <p className="text-gray-300">
                  Weekdays
                </p>

                <h2 className="text-4xl font-bold text-yellow-400 mt-2">
                  ₹11,999
                </h2>

                <p className="text-gray-400 mt-2">
                  Entire Villa / Night
                </p>

              </div>

              <div className="glass rounded-2xl p-4">

                <p className="text-gray-300">
                  Weekends
                </p>

                <h2 className="text-4xl font-bold text-yellow-400 mt-2">
                  ₹15,999
                </h2>

                <p className="text-gray-400 mt-2">
                  Entire Villa / Night
                </p>

              </div>

              <div className="glass rounded-2xl p-4">

                <p className="text-gray-300">
                  Festive Dates
                </p>

                <h2 className="text-3xl font-bold text-yellow-400 mt-2">
                  On Request
                </h2>

                <p className="text-gray-400 mt-2">
                  Contact for Best Price
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 12, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown
          size={40}
          className="text-yellow-400"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#081C3A] to-transparent" />

    </section>
  );
}
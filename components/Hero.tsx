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

      {/* Background Slider */}

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

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#06152d]/90 via-[#081C3A]/65 to-black/60" />

      <div className="relative z-20 flex items-center min-h-screen">

        <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Small Heading */}

            <div className="flex items-center gap-2 text-yellow-400 mb-5">

              <Star size={18} fill="#D4AF37" />

              <span className="uppercase tracking-[5px] text-xs sm:text-sm">
                Managed by Zorielle Hospitality
              </span>

            </div>

            {/* Main Heading */}

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white max-w-4xl">

              Luxury Pool Villa

              <br />

              in Udaipur

            </h1>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-base md:text-lg leading-8 text-gray-200">

              Discover elegance, privacy and unforgettable luxury experiences
              with your family and friends. Relax in a premium private villa
              featuring a swimming pool, breathtaking Aravalli views and
              world-class hospitality.

            </p>

            {/* Feature Badges */}

            <div className="flex flex-wrap gap-3 mt-8">

              <div className="glass rounded-full px-4 py-2 flex items-center gap-2">

                <MapPin size={18} className="text-yellow-400" />

                <span>Udaipur</span>

              </div>

              <div className="glass rounded-full px-4 py-2 flex items-center gap-2">

                <Users size={18} className="text-yellow-400" />

                <span>6–8 Guests</span>

              </div>

              <div className="glass rounded-full px-4 py-2 flex items-center gap-2">

                <Waves size={18} className="text-yellow-400" />

                <span>Private Pool</span>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <a
                href="https://wa.me/918619985400"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 transition-all duration-300 hover:scale-105"
              >
                Book Entire Villa
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
              >
                Explore Gallery
              </a>

            </div>

            {/* Trust Badges */}

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="glass rounded-full px-4 py-2 text-sm">
                ⭐ Rated Luxury Villa
              </div>

              <div className="glass rounded-full px-4 py-2 text-sm">
                🏊 Private Pool
              </div>

              <div className="glass rounded-full px-4 py-2 text-sm">
                👨‍👩‍👧 Family Friendly
              </div>

              <div className="glass rounded-full px-4 py-2 text-sm">
                🔒 Safe & Secure
              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Scroll Down */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >

        <ChevronDown
          size={38}
          className="text-yellow-400"
        />

      </motion.div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#081C3A] to-transparent" />

    </section>
  );
}
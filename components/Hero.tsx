"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  Waves,
  ChevronDown,
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
    <section className="relative h-screen overflow-hidden">

      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="Luxury Villa"
          fill
          priority
          className={`object-cover absolute transition-opacity duration-[2000ms]
          ${
            current === index
              ? "opacity-100"
              : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#081C3A]/90 via-black/60 to-black/70" />

      <div className="relative z-20 h-full flex items-center pt-24 md:pt-0">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[8px] text-yellow-400 mb-5"
          >
            Managed by Zorielle Hospitality
          </motion.p>

          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-bold leading-tight text-white"
          >
            Luxury Pool Villa
            <br />
            in Udaipur
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="mt-8 max-w-2xl text-gray-300 text-lg"
          >
            Experience complete privacy,
            premium interiors, private pool,
            mountain views and unforgettable
            luxury stays.
          </motion.p>

          <div className="flex flex-wrap gap-4 mt-10">

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-5 py-3 flex items-center gap-2">

              <MapPin
                size={18}
                className="text-yellow-400"
              />

              <span>Udaipur</span>

            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-5 py-3 flex items-center gap-2">

              <Users
                size={18}
                className="text-yellow-400"
              />

              <span>6–8 Guests</span>

            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-5 py-3 flex items-center gap-2">

              <Waves
                size={18}
                className="text-yellow-400"
              />

              <span>Private Pool</span>

            </div>

          </div>          <div className="mt-12 flex flex-wrap gap-5">

            <a
              href="https://wa.me/918619985400"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold transition"
            >
              Book Entire Villa
            </a>

            <a
              href="#gallery"
              className="border border-white px-8 py-4 rounded-full text-white hover:bg-white hover:text-black transition"
            >
              Explore Gallery
            </a>

          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">

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

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">

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

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">

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

        </div>

      </div>

      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown
          size={40}
          className="text-yellow-400"
        />
      </motion.div>

    </section>
  );
}
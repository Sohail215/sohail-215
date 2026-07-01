"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  Car,
  Tv,
  CookingPot,
  Waves,
  Mountain,
  ShieldCheck,
  Coffee,
  Sparkles,
} from "lucide-react";

const amenities = [
  {
    icon: <Waves size={42} />,
    title: "Private Swimming Pool",
    desc: "Enjoy complete privacy with your own luxury swimming pool.",
  },
  {
    icon: <Wifi size={42} />,
    title: "High-Speed WiFi",
    desc: "Unlimited high-speed internet across the entire villa.",
  },
  {
    icon: <Car size={42} />,
    title: "Free Parking",
    desc: "Dedicated secure parking for all guests.",
  },
  {
    icon: <Tv size={42} />,
    title: "Smart Entertainment",
    desc: "Netflix, YouTube and premium entertainment experience.",
  },
  {
    icon: <CookingPot size={42} />,
    title: "Luxury Kitchen",
    desc: "Modern kitchen with premium cooking essentials.",
  },
  {
    icon: <Mountain size={42} />,
    title: "Mountain View",
    desc: "Beautiful Aravalli hill views from the villa.",
  },
  {
    icon: <Coffee size={42} />,
    title: "Morning Tea Space",
    desc: "Relax with tea and coffee in peaceful surroundings.",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Safe & Secure",
    desc: "Private property with secure environment.",
  },
  {
    icon: <Sparkles size={42} />,
    title: "Luxury Experience",
    desc: "Premium hospitality designed for memorable stays.",
  },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="py-28 bg-gradient-to-b from-[#10284D] to-[#081C3A]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[8px] text-yellow-400 text-center">
          Premium Amenities
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-center mt-4">
          Everything You Need
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mt-5 mb-16">
          Every detail has been thoughtfully designed to provide comfort,
          privacy and an unforgettable luxury stay.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="glass rounded-3xl border border-yellow-500/20 p-8 shadow-xl"
            >
              <div className="text-yellow-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
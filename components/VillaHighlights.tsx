"use client";

import { motion } from "framer-motion";
import {
  BedDouble,
  Waves,
  Wifi,
  Car,
  CookingPot,
  Tv,
  Mountain,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  {
    icon: <BedDouble size={34} />,
    title: "3 Luxury Bedrooms",
  },
  {
    icon: <Waves size={34} />,
    title: "Private Swimming Pool",
  },
  {
    icon: <CookingPot size={34} />,
    title: "Fully Equipped Kitchen",
  },
  {
    icon: <Wifi size={34} />,
    title: "High-Speed WiFi",
  },
  {
    icon: <Tv size={34} />,
    title: "Smart TV",
  },
  {
    icon: <Car size={34} />,
    title: "Free Parking",
  },
  {
    icon: <Mountain size={34} />,
    title: "Aravalli View",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "100% Private Stay",
  },
];

export default function VillaHighlights() {
  return (
    <section className="bg-[#10284D] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-yellow-400 uppercase tracking-[6px] text-center">
          Villa Highlights
        </p>

        <h2 className="text-5xl font-bold text-center mt-4 mb-16">
          Everything You Need
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {highlights.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#081C3A] rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300 text-center"
            >

              <div className="flex justify-center text-yellow-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white">
                {item.title}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

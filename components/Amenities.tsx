"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  Car,
  Tv,
  CookingPot,
  Waves,
  Mountain,
} from "lucide-react";

const amenities = [
  {
    icon: <Waves size={40} />,
    title: "Private Swimming Pool",
    desc: "Enjoy your own private luxury pool with complete privacy.",
  },
  {
    icon: <Wifi size={40} />,
    title: "High-Speed WiFi",
    desc: "Unlimited high-speed internet throughout the villa.",
  },
  {
    icon: <Car size={40} />,
    title: "Free Parking",
    desc: "Secure private parking available for all guests.",
  },
  {
    icon: <Tv size={40} />,
    title: "Smart TV",
    desc: "Watch Netflix, YouTube and entertainment on Smart TV.",
  },
  {
    icon: <CookingPot size={40} />,
    title: "Modern Kitchen",
    desc: "Fully equipped kitchen with all essential appliances.",
  },
  {
    icon: <Mountain size={40} />,
    title: "Mountain View",
    desc: "Relax with breathtaking views of the Aravalli Hills.",
  },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="bg-[#10284D] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-yellow-400 uppercase tracking-[6px] text-center">
          Amenities
        </p>

        <h2 className="text-5xl font-bold text-center mt-4 mb-16">
          Luxury Facilities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {amenities.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#081C3A] border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-yellow-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
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
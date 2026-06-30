"use client";

import { motion } from "framer-motion";
import {
  BedDouble,
  Users,
  Waves,
  MapPin,
} from "lucide-react";

const stats = [
  {
    icon: <BedDouble size={34} />,
    value: "3",
    label: "Luxury Bedrooms",
  },
  {
      icon: <Users size={34} />,
  value: "6–8",
  label: "Maximum Guests",
  },
  {
    icon: <Waves size={34} />,
    value: "1",
    label: "Private Pool",
  },
  {
    icon: <MapPin size={34} />,
    value: "Udaipur",
    label: "Rajasthan",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#081C3A] py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
              }}
              className="bg-[#10284D] rounded-3xl p-10 border border-yellow-500/20 text-center hover:border-yellow-500 transition"
            >

              <div className="flex justify-center text-yellow-400">

                {item.icon}

              </div>

              <h2 className="text-5xl font-bold mt-6">

                {item.value}

              </h2>

              <p className="text-gray-300 mt-3">

                {item.label}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
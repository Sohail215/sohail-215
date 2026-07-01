"use client";

import { ShieldCheck, Waves, Wifi, Car, BedDouble, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Waves size={34} />,
    title: "Private Swimming Pool",
    desc: "Exclusive pool with complete privacy.",
  },
  {
    icon: <BedDouble size={34} />,
    title: "3 Luxury Bedrooms",
    desc: "Spacious premium bedrooms with modern interiors.",
  },
  {
    icon: <Wifi size={34} />,
    title: "High-Speed WiFi",
    desc: "Unlimited internet throughout the villa.",
  },
  {
    icon: <Car size={34} />,
    title: "Free Parking",
    desc: "Secure parking for all guests.",
  },
  {
    icon: <MapPin size={34} />,
    title: "Prime Location",
    desc: "Greater Kailash, Udaipur.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Safe & Secure",
    desc: "Perfect for families and groups.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#081C3A] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-yellow-400 text-center">
          Why Choose Zorielle
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mt-4">
          Luxury You Can Trust
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl p-8 border border-white/10 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-yellow-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-300 mt-4">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

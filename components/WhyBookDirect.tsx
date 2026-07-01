"use client";

import { ShieldCheck, BadgePercent, Headphones, Wallet } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <BadgePercent size={40} />,
    title: "Best Available Rates",
    description:
      "Book directly with us to receive the best available rates and exclusive offers.",
  },
  {
    icon: <Headphones size={40} />,
    title: "24×7 Personal Assistance",
    description:
      "Get instant support before, during and after your stay through WhatsApp or Call.",
  },
  {
    icon: <Wallet size={40} />,
    title: "No Hidden Charges",
    description:
      "Transparent pricing with no hidden booking fees or commissions.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Safe & Secure Booking",
    description:
      "Your booking is confirmed directly with Zorielle Hospitality for complete peace of mind.",
  },
];

export default function WhyBookDirect() {
  return (
    <section className="bg-[#081C3A] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-yellow-400 text-center">
          Direct Booking Benefits
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Why Book Direct?
        </h2>

        <p className="text-center text-gray-300 mt-5 max-w-3xl mx-auto">
          Enjoy exclusive benefits when you book directly with Zorielle
          Hospitality instead of third-party booking platforms.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {benefits.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl p-8 border border-white/10 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2"
            >

              <div className="text-yellow-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-300 mt-4 leading-7">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

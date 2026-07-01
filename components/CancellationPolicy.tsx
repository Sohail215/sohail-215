"use client";

import { ShieldCheck, CalendarX2, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

const policies = [
  {
    icon: <RefreshCcw size={38} />,
    title: "Free Cancellation",
    description:
      "Free cancellation up to 7 days before the check-in date.",
  },
  {
    icon: <CalendarX2 size={38} />,
    title: "Late Cancellation",
    description:
      "For cancellations made within 7 days of arrival, cancellation charges may apply.",
  },
  {
    icon: <ShieldCheck size={38} />,
    title: "Booking Confirmation",
    description:
      "Your reservation is confirmed only after receiving the booking confirmation from Zorielle Hospitality.",
  },
];

export default function CancellationPolicy() {
  return (
    <section className="bg-[#10284D] py-24">

      <div className="max-w-6xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-yellow-400 text-center">
          Booking Information
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Cancellation Policy
        </h2>

        <p className="text-center text-gray-300 mt-5 max-w-3xl mx-auto">
          We understand that plans may change. Our cancellation policy is
          designed to be fair and transparent for every guest.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {policies.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
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
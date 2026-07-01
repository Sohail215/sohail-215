"use client";

import { motion } from "framer-motion";
import { CalendarDays, Sparkles } from "lucide-react";

const offers = [
  {
    title: "Weekdays",
    price: "₹11,999",
    subtitle: "Entire Villa / Night",
  },
  {
    title: "Weekends",
    price: "₹15,999",
    subtitle: "Entire Villa / Night",
  },
  {
    title: "Festive Dates",
    price: "On Request",
    subtitle: "Best Available Price",
  },
];

export default function BookingOffers() {
  return (
    <section className="bg-[#081C3A] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-yellow-400 text-center">
          Luxury Offers
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mt-4">
          Choose Your Stay
        </h2>

        <p className="text-gray-300 text-center mt-5 max-w-2xl mx-auto">
          Flexible pricing for weekdays, weekends and festive holidays.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {offers.map((offer, index) => (

            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="glass rounded-3xl p-8 border border-white/10 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
            >

              <Sparkles
                className="text-yellow-400 mb-5"
                size={34}
              />

              <h3 className="text-2xl font-bold">
                {offer.title}
              </h3>

              <h2 className="text-5xl font-bold text-yellow-400 mt-6">
                {offer.price}
              </h2>

              <p className="text-gray-300 mt-4">
                {offer.subtitle}
              </p>

              <a
                href="https://wa.me/918619985400"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-7 py-3 rounded-full font-bold transition"
              >
                <CalendarDays size={18} />
                Book Now
              </a>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
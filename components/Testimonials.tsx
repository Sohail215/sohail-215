"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    city: "Jaipur",
    review:
      "Amazing villa with a private pool. The rooms were clean, spacious and the hospitality was excellent.",
  },
  {
    name: "Priya Mehta",
    city: "Ahmedabad",
    review:
      "Beautiful interiors and peaceful surroundings. Perfect place for family vacations.",
  },
  {
    name: "Aman Verma",
    city: "Delhi",
    review:
      "Highly recommended. Luxury experience, mountain views and a fantastic stay.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 bg-gradient-to-b from-[#081C3A] to-[#10284D]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[8px] text-center text-yellow-400">
          Guest Reviews
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-center mt-4">
          What Our Guests Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-[#081C3A] border border-yellow-500/20 rounded-3xl p-8 shadow-xl"
            >
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="#D4AF37"
                    className="text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-8">
                "{review.review}"
              </p>

              <div className="mt-8">

                <h3 className="text-xl font-bold">
                  {review.name}
                </h3>

                <p className="text-yellow-400">
                  {review.city}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
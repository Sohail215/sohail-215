"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    city: "New Delhi",
    review:
      "Amazing experience! The villa was luxurious, the private pool was spotless, and the hospitality was outstanding. Highly recommended.",
  },
  {
    name: "Priya Mehta",
    city: "Ahmedabad",
    review:
      "Beautiful interiors, peaceful surroundings, and perfect for a family vacation. We loved every moment of our stay.",
  },
  {
    name: "Aman Verma",
    city: "Jaipur",
    review:
      "One of the best luxury villas in Udaipur. Spacious rooms, premium amenities, and excellent service.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#081C3A] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center uppercase tracking-[6px] text-yellow-400">
          Guest Reviews
        </p>

        <h2 className="text-5xl font-bold text-center mt-4 mb-16">
          What Our Guests Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#10284D] border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500 transition-all duration-300"
            >

              <div className="flex gap-1 text-yellow-400 mb-6">
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
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
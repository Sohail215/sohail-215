"use client";

import Image from "next/image";
import { Users, BedDouble, Waves, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const rooms = [
  {
    title: "Luxury Bedroom",
    image: "/images/room1.jpeg",
    description:
      "Beautifully designed bedroom with a king-size bed, elegant interiors, air conditioning, and premium comfort for a relaxing stay.",
    guests: "2 Guests",
    feature: "King Size Bed",
  },
  {
    title: "Premium Bedroom",
    image: "/images/room2.jpeg",
    description:
      "Modern luxury bedroom featuring stylish décor, comfortable bedding, and a peaceful atmosphere for a memorable experience.",
    guests: "2 Guests",
    feature: "Premium Interior",
  },
  {
    title: "Entire Private Villa",
    image: "/images/exterior view.jpeg",
    description:
      "Book the entire Zorielle Villa Udaipur with exclusive access to the private swimming pool, spacious living areas, luxury bedrooms, and scenic Aravalli surroundings.",
    guests: "6–8 Guests",
    feature: "Private Villa",
  },
];

export default function Rooms() {
  return (
    <section
      id="rooms"
      className="py-28 bg-gradient-to-b from-[#081C3A] to-[#10284D]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[8px] text-yellow-400 text-center">
          Accommodation
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-center mt-4">
          Stay at Zorielle Villa Udaipur
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mt-5 mb-16">
          Discover elegant bedrooms, premium interiors, a private swimming
          pool, and breathtaking surroundings designed for an unforgettable
          luxury stay in Udaipur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#081C3A] shadow-2xl"
            >

              <div className="relative h-80 overflow-hidden">

                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-110"
                />

                <div className="absolute top-5 right-5 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
                  Premium
                </div>

              </div>

              <div className="p-7">

                <h3 className="text-3xl font-bold">
                  {room.title}
                </h3>

                <p className="text-gray-300 mt-4 leading-7">
                  {room.description}
                </p>

                <div className="flex flex-wrap gap-5 mt-6">

                  <div className="flex items-center gap-2 text-yellow-400">
                    <Users size={18} />
                    <span>{room.guests}</span>
                  </div>

                  <div className="flex items-center gap-2 text-yellow-400">
                    <BedDouble size={18} />
                    <span>{room.feature}</span>
                  </div>

                  <div className="flex items-center gap-2 text-yellow-400">
                    <Waves size={18} />
                    <span>Private Pool</span>
                  </div>

                </div>

                <a
                  href="https://wa.me/918619985400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-7 py-3 rounded-full font-bold transition-all duration-300"
                >
                  Book Zorielle Villa
                  <ArrowRight size={18} />
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
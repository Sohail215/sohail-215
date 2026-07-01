"use client";

import { MapPin, Clock, Car } from "lucide-react";
import { motion } from "framer-motion";

const attractions = [
  {
    name: "City Palace",
    distance: "18 km",
    time: "30 min",
    description:
      "One of the largest royal palace complexes in Rajasthan overlooking Lake Pichola.",
  },
  {
    name: "Lake Pichola",
    distance: "17 km",
    time: "28 min",
    description:
      "Famous lake offering boat rides, sunset views and luxury waterfront experience.",
  },
  {
    name: "Fateh Sagar Lake",
    distance: "15 km",
    time: "25 min",
    description:
      "Perfect destination for evening walks, boating and local food.",
  },
  {
    name: "Sajjangarh (Monsoon Palace)",
    distance: "14 km",
    time: "22 min",
    description:
      "Beautiful hilltop palace with panoramic sunset views of Udaipur.",
  },
  {
    name: "Bahubali Hills",
    distance: "20 km",
    time: "35 min",
    description:
      "Popular viewpoint known for breathtaking sunrise and photography.",
  },
  {
    name: "Badi Lake",
    distance: "7 km",
    time: "12 min",
    description:
      "Peaceful lake surrounded by Aravalli Hills, ideal for nature lovers.",
  },
];

export default function NearbyAttractions() {
  return (
    <section className="bg-[#081C3A] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-yellow-400 text-center">
          Explore Udaipur
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Nearby Attractions
        </h2>

        <p className="text-center text-gray-300 mt-5 max-w-3xl mx-auto">
          Discover famous attractions located near Zorielle Luxury Villa.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {attractions.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl p-8 border border-white/10 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2"
            >

              <MapPin
                size={38}
                className="text-yellow-400 mb-6"
              />

              <h3 className="text-2xl font-bold">
                {item.name}
              </h3>

              <p className="text-gray-300 mt-4 leading-7">
                {item.description}
              </p>

              <div className="flex justify-between mt-8 text-sm text-gray-400">

                <div className="flex items-center gap-2">
                  <Car size={16}/>
                  {item.distance}
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={16}/>
                  {item.time}
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
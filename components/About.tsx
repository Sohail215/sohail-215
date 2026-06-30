"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Private Swimming Pool",
  "Luxury Bedrooms",
  "Mountain View",
  "Free High-Speed WiFi",
  "Fully Equipped Kitchen",
  "24×7 Guest Support",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#081C3A] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[550px] rounded-3xl overflow-hidden border-4 border-yellow-500 shadow-2xl">

              <Image
                src="/images/exterior view.jpeg"
                alt="Zorielle Luxury Villa"
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />

            </div>

            <div className="absolute -bottom-8 -right-8 bg-yellow-500 text-black rounded-2xl px-8 py-6 shadow-xl">

              <h3 className="text-4xl font-bold">
                5★
              </h3>

              <p className="font-semibold">
                Luxury Experience
              </p>

            </div>

          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[6px] text-yellow-400 font-semibold">
              About Zorielle
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">

              Where Luxury
              <br />
              Feels Personal

            </h2>

            <p className="text-gray-300 mt-8 text-lg leading-8">

              Welcome to <span className="text-yellow-400 font-semibold">Zorielle Luxury Villa</span>,
              where comfort meets elegance.

              Experience premium hospitality, spacious luxury rooms,
              a private swimming pool, breathtaking mountain views,
              and unforgettable moments with your family and friends
              in the heart of Udaipur.

            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              {features.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle
                    className="text-yellow-400"
                    size={22}
                  />

                  <span className="text-gray-200">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <div className="grid grid-cols-3 gap-6 mt-14">

              <div>

                <h3 className="text-4xl font-bold text-yellow-400">
                  3+
                </h3>

                <p className="text-gray-300 mt-2">
                  Luxury Rooms
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-yellow-400">
                  100%
                </h3>

                <p className="text-gray-300 mt-2">
                  Private Villa
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-yellow-400">
                  24×7
                </h3>

                <p className="text-gray-300 mt-2">
                  Guest Support
                </p>

              </div>

            </div>

            <a
              href="#gallery"
              className="inline-block mt-12 bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-full font-bold transition"
            >
              Explore Villa
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
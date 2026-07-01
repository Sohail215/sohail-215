"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#081C3A]">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="text-center"
      >

        <motion.h1
          initial={{ letterSpacing: "0.2em" }}
          animate={{ letterSpacing: "0.05em" }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-yellow-400"
        >
          ZORIELLE
        </motion.h1>

        <p className="mt-4 text-gray-300 tracking-[6px] uppercase">
          Luxury Villa
        </p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{
            duration: 1.2,
          }}
          className="h-1 bg-yellow-400 rounded-full mx-auto mt-8"
        />

      </motion.div>

    </div>
  );
}
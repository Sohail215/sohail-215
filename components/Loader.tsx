"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#081C3A] flex items-center justify-center">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-center"
      >

        <h1 className="text-7xl font-bold text-yellow-400">
          Z
        </h1>

        <p className="text-white tracking-[10px] mt-4 text-lg">
          ZORIELLE
        </p>

      </motion.div>

    </div>
  );
}
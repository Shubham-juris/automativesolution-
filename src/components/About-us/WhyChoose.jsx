import React from 'react';
import { motion } from 'framer-motion';
import choose from "../../assets/aboutUs/img1.jpeg";

const points = [
  "100% verified truck listings with service history",
  "Genuine parts sourced directly from OEMs",
  "Fast & affordable repair network",
  "Dedicated support for buyers & sellers",
];

// Left-right floating animation
const floatLeftRight = {
  animate: {
    x: [0, -15, 0, 15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-black/80">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Animated Image Section */}
        <motion.div
          className="md:w-1/2"
          variants={floatLeftRight}
          animate="animate"
        >
          <img
            src={choose}
            alt="Why Choose Us"
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Animated Content Section */}
        <motion.div
          className="md:w-1/2 space-y-4 text-white"
          variants={floatLeftRight}
          animate="animate"
        >
          <h2 className="text-3xl font-bold text-yellow-500">Why Choose Us?</h2>
          <ul className="space-y-3 list-disc list-inside text-gray-300">
            {points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

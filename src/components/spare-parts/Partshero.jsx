import React from 'react';
import { motion } from 'framer-motion';
import hero from "../../assets/spareParts/hero.jpg";

// Animation settings
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const scaleFadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const PartsHero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        className="relative z-10 text-center text-white max-w-3xl space-y-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="text-4xl font-bold" variants={scaleFadeUp}>
          Genuine Spare Parts for Your Truck
        </motion.h1>
        <motion.p className="text-lg text-gray-200" variants={scaleFadeUp}>
          Find engine parts, brakes, suspensions, and more –
        </motion.p>
        <motion.p className="text-lg text-gray-200" variants={scaleFadeUp}>
          all tested and delivered across India.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default PartsHero;

import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/aboutUs/hero.jpg';

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.20, ease: 'easeOut' } },
};

const AboutHero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center justify-center px-4 md:px-20"
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <motion.div
        className="relative z-10 max-w-3xl text-center text-white space-y-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="text-4xl md:text-5xl font-bold" variants={fadeUp}>
          About Auto Mative Solution
        </motion.h1>

        <div className="space-y-2 text-lg text-gray-200">
          <motion.p variants={fadeUp}>
            We are a one-stop destination for verified old trucks,
          </motion.p>
          <motion.p variants={fadeUp}>
            original spare parts, and trusted repair services.
          </motion.p>
          <motion.p variants={fadeUp}>
            Our mission is to support the logistics industry
          </motion.p>
          <motion.p variants={fadeUp}>
            by connecting transporters, sellers, and workshops under one reliable platform.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;

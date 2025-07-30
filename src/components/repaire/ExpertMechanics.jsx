import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../../assets/repair/hero.webp';

// Animated character component
const AnimatedParagraph = ({ text }) => {
  const letters = text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.p
      className="text-lg text-gray-300"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, i) => (
        <motion.span key={i} variants={child}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

const RepairHero = () => {
  return (
    <section className="bg-black/80 text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Reliable Truck Repair Services
          </h1>

          <AnimatedParagraph text="We provide certified, fast, and transparent repair solutions for all commercial vehicles." />
          <AnimatedParagraph text="Keep your fleet on the road with expert care and 24/7 support." />
        </div>

        <div className="md:w-1/2 w-full">
          <img
            src={heroImg}
            alt="Truck repair service"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default RepairHero;

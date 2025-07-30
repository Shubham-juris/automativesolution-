import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../../assets/repair/hero1.jpg';

const RepairHero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center justify-center px-4 md:px-20"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        className="relative z-10 max-w-3xl text-center text-white space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Reliable Truck Repair Services
        </h1>
      </motion.div>
    </section>
  );
};

export default RepairHero;

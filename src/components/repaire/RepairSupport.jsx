import React from 'react';
import { motion } from 'framer-motion';

const flipVariant = {
  animate: {
    rotateY: [0, 180, 360],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

const zoomVariant = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const RepairSupport = () => (
  <section className="py-16 bg-white px-4 md:px-20">
    <div className="max-w-4xl mx-auto text-center space-y-6">
      <motion.h2
        className="text-3xl font-bold"
        variants={flipVariant}
        animate="animate"
      >
        24x7 Support
      </motion.h2>

      <p className="text-gray-600">
        Have a question or need help selecting the right service? Our customer support is always ready to assist with bookings, queries, and emergencies.
      </p>

      
    
    </div>
  </section>
);

export default RepairSupport;

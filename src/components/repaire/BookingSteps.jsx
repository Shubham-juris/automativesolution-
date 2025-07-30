import React from 'react';
import { motion } from 'framer-motion';

const pulseVariant = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const BookingSteps = () => (
  <section className="py-16 bg-black/80 text-white px-4 md:px-20">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <motion.h2
        className="text-3xl font-bold"
        variants={pulseVariant}
        animate="animate"
      >
        Easy Booking Process
      </motion.h2>

      <div className="max-w-xl mx-auto text-left">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          {[
            "Submit Request: Choose your vehicle and issue via our online form or helpline.",
            "Get Quotation: Receive service estimates from nearby certified workshops.",
            "Confirm & Schedule: Book at your convenience with pickup/drop options.",
            "Track & Pay: Track repair status and make secure payments digitally.",
          ].map((step, i) => (
            <motion.li
              key={i}
              variants={pulseVariant}
              animate="animate"
            >
              <strong>{step.split(":")[0]}:</strong> {step.split(":")[1]}
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default BookingSteps;

import React from 'react';
import { motion } from 'framer-motion';
import engine from "../../assets/spareParts/engine.jpeg";
import brake from "../../assets/spareParts/breaks.jpg";
import Suspension from "../../assets/spareParts/img3.webp";
import lighting from "../../assets/spareParts/lighting.jpg";
import Transmission from "../../assets/spareParts/Transmission.jpeg";
import Filters from "../../assets/spareParts/Filters.png";

const categories = [
  { name: "Engine Parts", image: engine },
  { name: "Brake Systems", image: brake },
  { name: "Suspension", image: Suspension },
  { name: "Lighting", image: lighting },
  { name: "Transmission", image: Transmission },
  { name: "Filters", image: Filters },
];

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const PartsCategories = () => (
  <section className="py-16 px-4 md:px-20 bg-black/80">
    {/* <h2 className="text-3xl font-bold text-center mb-12 text-white">Spare Parts Categories</h2> */}

    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {categories.map((item, idx) => (
        <motion.div
          key={idx}
          className="bg-gray-100 rounded-xl shadow-md p-4 text-center hover:shadow-yellow-400/50 transition duration-300 cursor-pointer hover:scale-105"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={idx}
        >
          <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded mb-4">
            <img
              src={item.image}
              alt={item.name}
              className="object-contain w-full h-full"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PartsCategories;

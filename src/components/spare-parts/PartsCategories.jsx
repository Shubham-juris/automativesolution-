import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import engine from "../../assets/spareParts/engine.jpeg";
import brake from "../../assets/spareParts/breaks.jpg";
import Suspension from "../../assets/spareParts/img3.webp";
import lighting from "../../assets/spareParts/lighting.jpg";
import Transmission from "../../assets/spareParts/Transmission.jpeg";
import Filters from "../../assets/spareParts/Filters.png";

const categories = [
  { name: "Engine Parts", image: engine, link: "/engine-parts" },
  { name: "Brake Systems", image: brake, link: "/brake-systems" },
  { name: "Suspension", image: Suspension, link: "/suspension" },
  { name: "Lighting", image: lighting, link: "/lighting" },
  { name: "Transmission", image: Transmission, link: "/transmission" },
  { name: "Filters", image: Filters, link: "/filters" },
];

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
    <h2 className="text-3xl font-bold text-center mb-12 text-white">Spare Parts Categories</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {categories.map((item, idx) => (
        <Link to={item.link} key={idx}>
          <motion.div
            className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-44 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-white font-semibold text-lg">{item.name}</h3>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  </section>
);

export default PartsCategories;


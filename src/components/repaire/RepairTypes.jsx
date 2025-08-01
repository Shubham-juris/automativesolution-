import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import electrical from "../../assets/repair/img5.jpg";
import engine from '../../assets/repair/img1.avif';
import ac from '../../assets/repair/img4.jpg';
import tire from '../../assets/repair/img3.jpg';
import brake from '../../assets/repair/img2.jpg';
import suspension from '../../assets/repair/img6.jpg';

const services = [
  { title: "Engine Diagnostics & Repair", img: engine, link: "/engine" },
  { title: "Brake & Suspension Services", img: brake, link: "/brake" },
  { title: "Tyre & Wheel Alignment", img: tire, link: "/tyre-alignment" },
  { title: "Electrical System Check", img: electrical, link: "/electrical-check" },
  { title: "AC & Cabin Cooling Repair", img: ac, link: "/ac-cabin" },
  { title: "Suspension Rebuild", img: suspension, link: "/suspension-rebuild" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const RepairTypes = () => (
  <section className="bg-black/80 py-16 px-4 md:px-20">
    <h2 className="text-3xl font-bold text-center text-white mb-10">Our Key Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {services.map((s, i) => (
        <Link to={s.link} key={i}>
          <motion.div
            className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <img src={s.img} alt={s.title} className="w-full h-44 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-white font-semibold text-lg">{s.title}</h3>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  </section>
);

export default RepairTypes;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/navbar/img1.jpg";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6 px-4 md:px-20">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Logo & Description */}
        <motion.div custom={1} variants={fadeUp}>
          <img src={logo} alt="Logo" className="w-36 h-auto mb-4" />
          <p className="text-sm text-gray-300">
            Your trusted partner for trucks, parts, repairs, and purchase assistance. We bring reliability and quality to your journey.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div custom={2} variants={fadeUp}>
          <h4 className="text-yellow-500 text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="about-us" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link to="spareparts" className="hover:text-yellow-400">SpareParts</Link></li>
            <li><Link to="repair" className="hover:text-yellow-400">Repair Services</Link></li>
            <li><Link to="contact" className="hover:text-yellow-400">contact</Link></li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div custom={3} variants={fadeUp}>
          <h4 className="text-yellow-500 text-lg font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Verified Used Trucks</li>
            <li>Genuine Spare Parts</li>
            <li>Repair Services</li>
            <li>Purchase Assistance</li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div custom={4} variants={fadeUp}>
          <h4 className="text-yellow-500 text-lg font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Address: Alberta ,canada</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
      >
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;

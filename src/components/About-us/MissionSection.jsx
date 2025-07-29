import React from 'react';
import { Truck, Wrench, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variant for fade-in-up
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const MissionSection = () => {
  const features = [
    {
      icon: <Truck size={32} />,
      title: "Verified Trucks",
      description: "We ensure every truck is documented, tested, and ready for use.",
    },
    {
      icon: <Wrench size={32} />,
      title: "Reliable Repairs",
      description: "Partnered with certified workshops for fast and efficient repairs.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Trust & Support",
      description: "We offer buyer support, paperwork help, and seller trust guarantee.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-20 bg-black/80">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Our Mission</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          To simplify truck trading, servicing, and support by bringing transparency, quality, and speed to India’s transport ecosystem.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-md w-72 text-left hover:bg-gray-800 transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={fadeInUp}
            >
              <div className="text-yellow-500 mb-3">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

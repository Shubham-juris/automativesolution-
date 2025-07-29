import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Floating animation variant
const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const WhyChooseUsSection = () => {
  return (
    <section className="bg-black/80 py-14 px-4 md:px-20 text-white">
      {/* Header Section with float */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        animate={floatAnimation.animate}
        className="mb-12"
      >
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-yellow-500">
            One-Stop Destination for Old Trucks, Parts & Repairs
          </h2>
          <p className="text-gray-300">
            We specialize in connecting buyers with quality old trucks, genuine spare parts,
            and reliable repair services. Whether you're looking to purchase a used vehicle,
            find rare parts, or get your truck back on the road — we’ve got you covered.
          </p>
          <p className="text-gray-400">
            Serving transport businesses, local dealers, and individual truck owners
            across India with trust, transparency, and technology.
          </p>
        </div>
      </motion.div>

      {/* Feature Cards with floating */}
      <motion.div
        className="flex flex-wrap justify-between bg-gray-900 p-6 rounded-xl shadow-sm max-w-7xl mx-auto gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        animate={floatAnimation.animate}
      >
        {[
          {
            title: "🚛 Verified Used Trucks",
            desc: "Browse a wide range of old trucks, inspected and verified for quality, performance, and documentation.",
          },
          {
            title: "🛠️ Genuine Spare Parts",
            desc: "Get authentic parts for all major truck brands – engines, tyres, gearboxes, suspensions & more.",
          },
          {
            title: "🧰 Trusted Repair Services",
            desc: "Book reliable truck repair workshops near you with trained mechanics and fair pricing.",
          },
          {
            title: "📞 Easy Contact & Support",
            desc: "Call or WhatsApp us anytime — our team helps you quickly find the right truck, part, or service you need.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeInUp}
            className="flex-1 min-w-[250px] max-w-[48%] md:max-w-[45%] lg:max-w-[47%] space-y-2 hover:bg-gray-800 p-4 rounded transition"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUsSection;

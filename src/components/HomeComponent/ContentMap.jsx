import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/home/img1.webp";
import img2 from "../../assets/home/img2.jpg";
import img3 from "../../assets/home/img3.jpg";
import img4 from "../../assets/home/img4.avif";

const contentMap = {
  trucks: {
    title: "🚛 Verified Used Trucks",
    content:
      "We offer a wide range of verified, pre-owned trucks with proper documentation, performance checks, and trusted seller assurance. Ideal for businesses and independent transporters.",
    image: img1,
  },
  parts: {
    title: "🛠️ Genuine Spare Parts",
    content:
      "From engine components to suspensions and tires, we deliver original spare parts for all major truck brands at competitive prices.",
    image: img2,
  },
  repair: {
    title: "🧰 Trusted Repair Services",
    content:
      "Connect with certified truck workshops. Fast service, experienced mechanics, and transparent pricing for repairs and maintenance.",
    image: img3,
  },
  purchase: {
    title: "📝 Truck Purchase Assistance",
    content:
      "Need help purchasing the right truck? Our expert team provides consultations, comparisons, and paperwork support for a hassle-free experience.",
    image: img4,
  },
};

const slideVariants = {
  initial: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  exit: (direction) => ({
    opacity: 0,
    x: direction < 0 ? 100 : -100,
    transition: { duration: 0.4 },
  }),
};

const ServicesSlider = () => {
  const keys = Object.keys(contentMap);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prevIndex) => (prevIndex + 1) % keys.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [keys.length]);

  const activeKey = keys[activeIndex];
  const active = contentMap[activeKey];

  return (
    <section className="bg-black/80 text-white py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 items-center min-h-[300px]">
        {/* Image with float animation */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={active.image}
            src={active.image}
            alt={active.title}
            className="rounded-xl shadow-md w-full md:w-1/2 h-auto object-cover"
            variants={slideVariants}
            initial="initial"
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            exit="exit"
            custom={direction}
          />
        </AnimatePresence>

        {/* Text with opposite float animation */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active.title}
            className="space-y-4 w-full md:w-1/2 text-center md:text-left"
            variants={slideVariants}
            initial="initial"
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 10, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            exit="exit"
            custom={direction}
          >
            <h2 className="text-2xl font-bold text-white">{active.title}</h2>
            <p className="text-gray-300">{active.content}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSlider;

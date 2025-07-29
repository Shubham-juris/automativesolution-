import React from 'react';
import hero from "../../assets/spareParts/hero.jpg"

const PartsHero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 text-center text-white max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold">Genuine Spare Parts for Your Truck</h1>
        <p className="text-lg text-gray-200">
          Find engine parts, brakes, suspensions, and more – all tested and delivered across India.
        </p>
      </div>
    </section>
  );
};

export default PartsHero;

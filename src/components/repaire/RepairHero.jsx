import React from 'react';
import heroImg from '../../assets/repair/hero.webp';

const RepairHero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center justify-center px-4 md:px-20"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-3xl text-center text-white space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Reliable Truck Repair Services</h1>
        <p className="text-lg text-gray-200">
          We provide certified, fast, and transparent repair solutions for all commercial vehicles.
          Keep your fleet on the road with expert care and nationwide support.
        </p>
      </div>
    </section>
  );
};

export default RepairHero;

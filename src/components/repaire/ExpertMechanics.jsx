import React from 'react';
import heroImg from '../../assets/repair/hero.webp';

const RepairHero = () => {
  return (
    <section className="bg-black/80 text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Reliable Truck Repair Services
          </h1>
          <p className="text-lg text-gray-300">
            We provide certified, fast, and transparent repair solutions for all commercial vehicles.
            Keep your fleet on the road with expert care and 24/7 support.
          </p>
        </div>

        <div className="md:w-1/2 w-full">
          <img
            src={heroImg}
            alt="Truck repair service"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default RepairHero;

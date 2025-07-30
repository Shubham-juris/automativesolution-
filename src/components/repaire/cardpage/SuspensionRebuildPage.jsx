import React from 'react';
import suspensionImg from '../../../assets/repair/img6.jpg';

const SuspensionRebuildPage = () => {
  return (
    <section className="bg-black/80 py-16 px-4 md:px-20 text-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Suspension Rebuild
          </h1>
          <p className="text-lg text-gray-300">
            Get smoother rides and better load stability with our expert suspension rebuild service for heavy-duty trucks.
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src={suspensionImg}
            alt="Suspension Rebuild"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Detailed Info */}
      <div className="max-w-5xl mx-auto mt-16 space-y-8 text-gray-300">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Heavy-Duty Suspension Service
          </h2>
          <p>
            Our technicians inspect, diagnose, and rebuild leaf springs, shock absorbers, bushings, and mounts to restore original suspension strength. 
            A worn-out suspension leads to poor ride quality, cargo damage, and increased tire wear.
          </p>
          <p>
            We specialize in rebuilding front and rear suspension systems for trailers, tippers, tankers, and multi-axle trucks.
            All replacements are done using OEM-grade or better components.
          </p>
          <p>
            Our workshop ensures proper alignment, torque specs, and safety checks post-rebuild.
            Ride more confidently even on rough terrains with a fully restored suspension system.
          </p>
          <p className="text-blue-500 font-medium text-lg mt-4">
            ✅ Boost comfort, durability, and road handling with professional suspension rebuilding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuspensionRebuildPage;

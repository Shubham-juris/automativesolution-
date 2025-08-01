import React from "react";
import engineimg1 from '../../../assets/repair/img1.avif';
import engine1 from "../../../assets/repair/engine1.webp"
import engineimg2 from '../../../assets/repair/engine2.jpg';

const EngineDiagnostics = () => {
  return (
    <section className="bg-black/80 text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black/80 flex items-center justify-center px-4 md:px-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${engineimg1})` }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white text-center">
          Engine Diagnostics & Repair
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-16 px-4 md:px-20 space-y-12">
        {/* Overview */}
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold text-yellow-400">
            Comprehensive Engine Care
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Your truck's engine is the heart of your vehicle, and our diagnostics service ensures it stays strong and healthy.
            We use advanced diagnostic tools to identify issues with fuel injection, ignition, exhaust systems, and more. 
            Whether it's a minor glitch or a major engine overhaul, our expert technicians are trained to handle it all.
          </p>
          <div>
            <p className="text-gray-300 leading-relaxed">
              Our repair centers are equipped to handle:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
              <li>Engine oil leakage diagnosis & fix</li>
              <li>Turbocharger inspection and repairs</li>
              <li>Crankshaft and piston repair</li>
              <li>Timing belt replacement</li>
              <li>Check engine light scanning & troubleshooting</li>
            </ul>
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={engine1}
            alt="Engine diagnostics"
            className="rounded-xl shadow-lg w-full h-64 object-cover"
          />
          <img
            src={engineimg2}
            alt="Engine repair"
            className="rounded-xl shadow-lg w-full h-64 object-cover"
          />
        </div>

        {/* Why Choose Us */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 md:p-10 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Why Choose Our Service?
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>State-of-the-art engine diagnostic equipment</li>
            <li>Certified and experienced mechanics</li>
            <li>Transparent cost estimates before repair</li>
            <li>Fast turnaround and genuine engine components</li>
            <li>Post-repair testing and performance validation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EngineDiagnostics;

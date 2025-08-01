import React from 'react';
import acImg from '../../../assets/repair/ac.jpeg';

const CoolingRepairPage = () => {
  return (
    <section className="bg-black py-16 px-4 md:px-20 text-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            AC & Cabin Cooling Repair
          </h1>
          <p className="text-lg text-gray-300">
            Ensure driver comfort with our comprehensive cabin air conditioning and cooling repair services for trucks. Stay cool on the hottest days.
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src={acImg}
            alt="AC & Cabin Cooling Repair"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Detailed Info */}
      <div className="max-w-5xl mx-auto mt-16 space-y-12 text-gray-300">
        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">
            AC Performance Diagnosis
          </h2>
          <p>
            We test airflow, compressor function, and coolant levels to identify performance issues in your truck’s AC system. Our digital diagnostics ensure quick and accurate detection.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Component Repair & Recharge
          </h2>
          <p>
            Our team handles repairs of cooling coils, fan blowers, condensers, and cabin air filters. We also perform full refrigerant recharge and leak detection to restore optimal cooling.
          </p>
        </div>

        {/* Highlight */}
        <div className="text-blue-500 font-medium text-lg">
          ✅ Travel in comfort—no matter the heat—thanks to reliable cabin climate control.
        </div>
      </div>
    </section>
  );
};

export default CoolingRepairPage;

import React from 'react';
import electricalImg from '../../../assets/repair/img5.jpg';

const ElectricalSystemPage = () => {
  return (
    <section className="bg-black/80 py-16 px-4 md:px-20 text-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Electrical System Check
          </h1>
          <p className="text-lg text-gray-300">
            Ensure uninterrupted functionality of your truck’s lights, sensors, and electronics with expert diagnostics and fast repairs.
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src={electricalImg}
            alt="Electrical System Check"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-5xl mx-auto mt-16 space-y-12 text-gray-300">
        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Battery & Wiring Inspection
          </h2>
          <p>
            We check voltage levels, test terminals, and evaluate battery health. Our inspection ensures all wiring is free of corrosion, wear, or loose connections.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Lighting & Sensor Diagnostics
          </h2>
          <p>
            From headlamps to trailer lights, we verify proper operation of all lighting circuits. Our tools detect sensor faults and malfunctioning modules for quick resolution.
          </p>
        </div>

        {/* Callout */}
        <div className="text-blue-500 font-medium text-lg">
          ✅ Avoid electrical failures and unexpected downtimes with our comprehensive checkups.
        </div>
      </div>
    </section>
  );
};

export default ElectricalSystemPage;

import React from 'react';
import transmissionImage from '../../../assets/spareParts/Trans.jpg'; 

const TransmissionPage = () => {
  return (
    <section className="bg-black/90 text-white py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center border-b-2 border-yellow-500 inline-block">
          Transmission Parts & Components
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <img
            src={transmissionImage}
            alt="Transmission System"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
          <div>
            <p className="text-lg leading-relaxed">
              The transmission system is vital for transferring power from the engine to the wheels, ensuring optimal speed and torque based on driving conditions. 
              Whether automatic or manual, your transmission components must work flawlessly to maintain performance and efficiency. 
              We offer durable transmission parts tailored for commercial trucks, light vehicles, and heavy-duty machinery.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Available Transmission Components:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Transmission Assemblies</li>
            <li>Gear Sets</li>
            <li>Clutches & Pressure Plates</li>
            <li>Flywheels</li>
            <li>Torque Converters</li>
            <li>Transmission Mounts</li>
            <li>Shift Cables & Linkages</li>
            <li>Oil Seals & Gaskets</li>
            <li>Transmission Control Modules (TCMs)</li>
            <li>Transmission Fluid & Filters</li>
          </ul>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Why Invest in High-Quality Transmission Parts?</h2>
          <p className="text-lg leading-relaxed">
            Transmission failures can lead to breakdowns, gear slippage, and loss of power on the road. 
            Using high-quality components ensures smoother shifts, extended part life, and optimal vehicle performance. 
            All our parts meet OEM standards and are tested for extreme working conditions.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default TransmissionPage;

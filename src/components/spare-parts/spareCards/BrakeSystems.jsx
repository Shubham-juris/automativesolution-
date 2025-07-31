import React from 'react';
import brakeImage from '../../../assets/spareParts/breaks.jpg'; 

const BrakeSystems = () => {
  return (
    <section className="bg-black/90 text-white py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center border-b-2 border-yellow-500 inline-block">
          Brake Systems & Components
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <img
            src={brakeImage}
            alt="Brake Components"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
          <div>
            <p className="text-lg leading-relaxed">
              The braking system is one of the most critical safety components in any vehicle. 
              It ensures control, stability, and timely stopping under various conditions. 
              We provide a wide range of high-quality brake parts designed for performance, reliability, and safety — from light trucks to heavy-duty commercial vehicles.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Available Brake Components:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Brake Pads</li>
            <li>Brake Discs (Rotors)</li>
            <li>Brake Shoes</li>
            <li>Drum Brakes</li>
            <li>Calipers</li>
            <li>Brake Master Cylinders</li>
            <li>Brake Boosters</li>
            <li>Brake Hoses & Lines</li>
            <li>ABS Modules & Sensors</li>
            <li>Brake Fluids & Reservoirs</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Why Choose High-Performance Brake Parts?</h2>
          <p className="text-lg leading-relaxed">
            Reliable brake components are vital for avoiding accidents and maintaining vehicle control, especially under heavy loads or in tough driving conditions.
            Low-quality or worn-out brake parts can lead to longer stopping distances, vibration, noise, or even complete failure. 
            Our parts are rigorously tested to meet global safety standards, ensuring peace of mind on the road.
          </p>
        </div>

      
      </div>
    </section>
  );
};

export default BrakeSystems;

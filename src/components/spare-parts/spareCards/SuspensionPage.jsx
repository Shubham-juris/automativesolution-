import React from 'react';
import suspensionImage from '../../../assets/spareParts/img3.webp'; 

const SuspensionPage = () => {
  return (
    <section className="bg-black/90 text-white py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center border-b-2 border-yellow-500 inline-block">
          Suspension Parts & Components
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <img
            src={suspensionImage}
            alt="Suspension System"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
          <div>
            <p className="text-lg leading-relaxed">
              The suspension system ensures a smooth, stable, and controlled ride by absorbing road shocks and maintaining tire contact with the road. 
              Whether you're driving on rough terrains or smooth highways, a well-functioning suspension is key to handling, safety, and comfort. 
              We supply premium suspension parts for trucks and commercial vehicles to enhance performance and durability.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Available Suspension Components:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Shock Absorbers</li>
            <li>Struts</li>
            <li>Control Arms</li>
            <li>Ball Joints</li>
            <li>Suspension Springs (Leaf/Coil)</li>
            <li>Stabilizer Bars & Links</li>
            <li>Bushings</li>
            <li>Suspension Mounts</li>
            <li>Air Suspension Kits</li>
            <li>Lift Kits & Suspension Upgrades</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Why Maintain Your Suspension?</h2>
          <p className="text-lg leading-relaxed">
            A worn-out suspension affects ride quality, braking distance, tire wear, and overall vehicle safety. 
            Upgrading or replacing faulty parts with high-quality components improves stability, reduces driver fatigue, and ensures safe cargo transport.
            Our parts are tested for heavy-duty conditions and guaranteed to meet OEM specs.
          </p>
        </div>

       
      </div>
    </section>
  );
};

export default SuspensionPage;

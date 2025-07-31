import React from "react";
import lightingImage from "../../../assets/spareParts/lighting.jpg";
import { Link } from 'react-router-dom';


const LightingPage = () => {
  return (
    <section className="bg-black/90 text-white py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center border-b-2 border-yellow-500 inline-block">
          Vehicle Lighting Systems
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <img
            src={lightingImage}
            alt="Lighting System"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
          <div>
            <p className="text-lg leading-relaxed">
              Vehicle lighting systems are essential for visibility, safety, and
              communication on the road. From headlights to tail lights, each
              lighting component plays a critical role in ensuring the vehicle
              is seen and understood by others. We offer a wide range of truck
              lighting parts that combine brightness, efficiency, and
              long-lasting durability.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
            Available Lighting Components:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Headlights (Halogen, LED, HID)</li>
            <li>Fog Lamps</li>
            <li>Tail Lights</li>
            <li>Brake Lights</li>
            <li>Turn Signal Lights</li>
            <li>Reverse Lights</li>
            <li>Cabin & Dome Lights</li>
            <li>Side Marker Lamps</li>
            <li>Work Lights & Auxiliary Lamps</li>
            <li>Wiring Harnesses & Sockets</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
            Why Use High-Quality Lighting?
          </h2>
          <p className="text-lg leading-relaxed">
            Poor or outdated lighting can reduce road visibility and increase
            the risk of accidents, especially in low-light or adverse weather
            conditions. Our lighting components provide maximum illumination,
            energy efficiency, and compliance with DOT and SAE standards,
            ensuring your truck is always road-ready and safe.
          </p>
        </div>

        <div className="text-center mt-10">
          <p className="text-xl font-semibold mb-4">
            Need help finding the right lighting solution?
          </p>

          <Link to="/contact">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-medium shadow-md transition duration-300">
              Contact Lighting Support
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LightingPage;

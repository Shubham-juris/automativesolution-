import React from "react";
import engineImage from "../../../assets/spareParts/engine.jpeg";
import { Link } from "react-router-dom";

const EngineParts = () => {
  return (
    <section className="bg-black/90 text-white py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center border-b-2 border-yellow-500 inline-block">
          Engine Parts & Components
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <img
            src={engineImage}
            alt="Engine Components"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
          <div>
            <p className="text-lg leading-relaxed">
              The engine is the heart of your truck, and its performance depends
              on the quality and condition of its internal parts. Our
              premium-grade engine components ensure durability, efficiency, and
              power delivery for both light-duty and heavy-duty vehicles. We
              offer a full range of OEM and aftermarket engine parts that meet
              or exceed industry standards.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
            Available Engine Parts:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Engine Blocks</li>
            <li>Cylinder Heads</li>
            <li>Pistons & Piston Rings</li>
            <li>Crankshafts</li>
            <li>Camshafts</li>
            <li>Oil Pumps</li>
            <li>Timing Belts & Chains</li>
            <li>Gaskets & Seals</li>
            <li>Fuel Injectors & Pumps</li>
            <li>Engine Mounts</li>
            <li>Valve Trains</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
            Why Quality Engine Parts Matter?
          </h2>
          <p className="text-lg leading-relaxed">
            Using high-quality engine components significantly impacts vehicle
            performance, fuel efficiency, and longevity. Substandard or worn-out
            parts can lead to frequent breakdowns, overheating, power loss, and
            expensive repairs. That’s why we only offer parts from trusted
            manufacturers to keep your truck running at peak performance.
          </p>
        </div>

        <div className="text-center mt-10">
          <p className="text-xl font-semibold mb-4">
            Need help choosing the right part?
          </p>
          <Link to="/contact">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-medium shadow-md transition duration-300">
              Contact Our Experts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EngineParts;

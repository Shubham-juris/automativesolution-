import React from 'react';
import filtersImage from '../../../assets/spareParts/Filters.png'; 

const FiltersPage = () => {
  return (
    <section className="bg-black/90 text-white py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center border-b-2 border-yellow-500 inline-block">
          Automotive Filters & Components
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <img
            src={filtersImage}
            alt="Automotive Filters"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
          <div>
            <p className="text-lg leading-relaxed">
              Filters are essential for protecting your truck’s engine and systems from dust, dirt, and harmful contaminants. 
              Clean filters ensure optimal airflow, fuel delivery, and lubrication — all of which are vital for performance and long engine life. 
              We provide a complete range of heavy-duty and light vehicle filters built for long-lasting efficiency.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Available Filter Types:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Air Filters</li>
            <li>Oil Filters</li>
            <li>Fuel Filters</li>
            <li>Cabin Air Filters</li>
            <li>Hydraulic Filters</li>
            <li>Transmission Filters</li>
            <li>Coolant Filters</li>
            <li>Crankcase Ventilation Filters</li>
            <li>Water Separator Filters</li>
            <li>Performance & Aftermarket Filters</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Why Use Premium Filters?</h2>
          <p className="text-lg leading-relaxed">
            Low-quality or clogged filters can reduce fuel economy, increase emissions, and cause engine wear or damage.
            Our filters are designed to meet OEM standards and provide excellent filtration, airflow, and efficiency — ensuring your vehicle performs at its best in all conditions.
          </p>
        </div>

    
      </div>
    </section>
  );
};

export default FiltersPage;

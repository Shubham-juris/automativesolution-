import React from 'react';

const stats = [
  { value: "1000+", label: "Trucks Sold" },
  { value: "500+", label: "Workshops Connected" },
  { value: "10,000+", label: "Parts Delivered" },
  { value: "95%", label: "Customer Satisfaction" },
];

const StatsSection = () => {
  return (
    <section className="bg-yellow-50 py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-3xl font-bold text-gray-800">Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-yellow-800">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-3xl font-extrabold">{stat.value}</h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

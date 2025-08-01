import React from "react";
import tyreImg from "../../../assets/repair/repair.jpg"; 
import alignmentImg from "../../../assets/repair/repair1.jpg"; 

const TyreAlignmentPage = () => {
  return (
    <div className="bg-black/80 text-white">
      <section className="relative bg-black/50 text-white py-20 px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tyre & Wheel Alignment</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ensure stability, grip, and safety with professional tyre services and computerized wheel alignment.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto space-y-12 text-gray-300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Tyre Check & Replacement</h2>
              <p>
                We inspect tread depth, wear patterns, and tyre condition. Whether you need retreading or a full tyre replacement, our team ensures your truck maintains the best road contact and performance.
              </p>
            </div>
            <img
              src={tyreImg}
              alt="Tyre Services"
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <img
              src={alignmentImg}
              alt="Wheel Alignment"
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Precision Wheel Alignment</h2>
              <p>
                Misaligned wheels can cause poor handling, tire wear, and reduced mileage. Our technicians use advanced alignment systems to ensure your wheels are set to manufacturer specifications for better control and fuel efficiency.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-xl font-medium text-blue-500">
              ✅ High-performance tyres, digital alignment & expert support included.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TyreAlignmentPage;

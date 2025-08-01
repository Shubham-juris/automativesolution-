import React from "react";
import brake1 from "../../../assets/repair/img2.jpg";
import brake2 from "../../../assets/repair/brake2.webp";

const BrakeSuspensionPage = () => {
  return (
    <div className="bg-black/80 text-white">
      {/* Hero Section */}
      <section className="relative bg-black/80 text-white py-20 px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Brake & Suspension Services</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Keep your truck safe and stable on the road with our expert brake and suspension services. Precision repairs backed by experienced technicians.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4 md:px-20 bg-[#111] text-gray-100">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img src={brake1} alt="Brake Service" className="rounded-xl shadow-lg" />
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-white">Brake System Repairs</h2>
              <p className="text-gray-300">
                Your truck’s braking system is critical for road safety. We offer:
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
                <li>Brake pad and rotor replacement</li>
                <li>Hydraulic brake line inspection</li>
                <li>ABS diagnostics and sensor calibration</li>
                <li>Brake fluid flush & replacement</li>
              </ul>
              <p className="mt-4 text-blue-500 font-medium">✔ OEM-certified parts & advanced diagnostics</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <img src={brake2} alt="Suspension Repair" className="rounded-xl shadow-lg" />
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-white">Suspension Rebuild & Alignment</h2>
              <p className="text-gray-300">
                Poor suspension affects control, comfort, and tire wear. We offer:
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
                <li>Shock absorber and strut replacement</li>
                <li>Leaf spring repair & upgrade</li>
                <li>Ball joint and bushing service</li>
                <li>Computerized wheel alignment</li>
              </ul>
              <p className="mt-4 text-blue-500 font-medium">✔ Ride smooth with precision alignment and stability</p>
            </div>
          </div>

          {/* Indicators Section */}
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Signs You Need Brake or Suspension Service:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left text-gray-300">
              <ul className="list-disc list-inside space-y-2">
                <li>Grinding or squealing brakes</li>
                <li>Soft or unresponsive brake pedal</li>
                <li>Brake warning light on dashboard</li>
                <li>Vibration during braking</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li>Truck pulling to one side</li>
                <li>Uneven tire wear</li>
                <li>Bumpy or rough ride</li>
                <li>Steering feels loose or stiff</li>
              </ul>
            </div>
          </div>

          {/* Warranty Message */}
          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-green-400">
              ✅ All repairs backed by warranty & expert customer support.
            </p>
            <p className="text-gray-400 mt-2">
              Schedule your service today and drive with confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrakeSuspensionPage;

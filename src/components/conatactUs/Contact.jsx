import React from 'react';
import repairImg from '../../assets/repair/img2.jpg';

const ContactPage = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        <div className="bg-white text-black w-full md:w-1/2 p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Truck Repair Booking Form</h2>
          <form className="space-y-5">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Roshan singh bisht"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Truck Issue</label>
              <input
                type="text"
                placeholder="Describe your issue"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Preferred Location</label>
              <input
                type="text"
                placeholder="City / Workshop Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Additional Message</label>
              <textarea
                rows="4"
                placeholder="Any additional info..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Submit Request
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
          <img
            src={repairImg}
            alt="Truck Repair"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
              Need Reliable <br />
              <span className="text-yellow-400">Truck Repair Support?</span><br />
              We’re Just a Call Away!
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactPage;

import React from 'react';

const PartsInquiryForm = () => {
  return (
    <section className="py-16 px-4 bg-black/80">
      <h2 className="text-3xl text-amber-300 font-semibold text-center mb-8">Request a Spare Part</h2>
      <form className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow space-y-4">
        <input type="text" placeholder="Full Name" className="w-full border p-3 rounded" />
        <input type="email" placeholder="Email Address" className="w-full border p-3 rounded" />
        <input type="text" placeholder="Truck Brand & Model" className="w-full border p-3 rounded" />
        <textarea rows="4" placeholder="Part Required & Details" className="w-full border p-3 rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Submit Inquiry</button>
      </form>
    </section>
  );
};

export default PartsInquiryForm;

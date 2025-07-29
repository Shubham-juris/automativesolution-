import React from 'react';

const BookingSteps = () => (
  <section className="py-16 bg-black/80 text-white px-4 md:px-20">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <h2 className="text-3xl font-bold">Easy Booking Process</h2>
      <div className="max-w-xl mx-auto text-left">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li>
            <strong>Submit Request:</strong> Choose your vehicle and issue via our online form or helpline.
          </li>
          <li>
            <strong>Get Quotation:</strong> Receive service estimates from nearby certified workshops.
          </li>
          <li>
            <strong>Confirm & Schedule:</strong> Book at your convenience with pickup/drop options.
          </li>
          <li>
            <strong>Track & Pay:</strong> Track repair status and make secure payments digitally.
          </li>
        </ol>
      </div>
    </div>
  </section>
);

export default BookingSteps;

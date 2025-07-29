import React from "react";
import { Link } from "react-router-dom";

const RepairCTA = () => (
  <section className="py-20 bg-yellow-600 px-4 md:px-20">
    <div className="max-w-5xl mx-auto text-center space-y-6 text-black">
      <h2 className="text-3xl font-bold">Ready to Get Back on the Road?</h2>
      <p>
        Book your repair service today and experience trusted care for your
        trucks.
      </p>
      <Link to="/contact">
        <button className="bg-black text-yellow-600 px-6 py-3 font-semibold rounded-xl hover:bg-gray-900 transition">
          Book a Service
        </button>
      </Link>
    </div>
  </section>
);

export default RepairCTA;

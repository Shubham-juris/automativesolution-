import React from "react";
import { Link } from "react-router-dom";
import video from "../../assets/repair/video1.mov";

const RepairCTA = () => (
  <section className="relative overflow-hidden py-20 px-4 md:px-20">
    <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      src={video}
      autoPlay
      muted
      loop
      playsInline
    />

    <div className="absolute inset-0 bg-black/70 z-0" />

    <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 text-white">
      <h2 className="text-3xl font-bold">Ready to Get Back on the Road?</h2>
      <p>
        Book your repair service today and experience trusted care for your
        trucks.
      </p>
      <Link to="/Booking">
        <button className="bg-white text-black px-6 py-3 font-semibold rounded-xl hover:bg-blue-500 transition">
          Book a Service
        </button>
      </Link>
    </div>
  </section>
);

export default RepairCTA;

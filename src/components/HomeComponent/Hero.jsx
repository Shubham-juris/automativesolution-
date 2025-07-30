import React from "react";
import { Link } from "react-router-dom";
import video from "../../assets/home/video.mp4";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <video
        src={video}
        autoPlay
        muted
        loop
        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover drop-shadow-[0_10px_10px_rgba(0,0,0,0.6)]"
      />

      <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Auto Mative Solution
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-xl">
          One-stop destination for old truck sales, spare parts & repair
          services.
        </p>
        <Link to="/Repair">
          <button className="mt-6 px-6 py-3 bg-yellow-600 text-black font-semibold rounded hover:bg-yellow-400 transition">
            Explore Services
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

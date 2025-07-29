import React from 'react';
import aboutImage from '../../assets/aboutUs/hero.jpg';

const AboutHero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center justify-center px-4 md:px-20"
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-3xl text-center text-white space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">About Auto Mative Solution</h1>
        <p className="text-lg text-gray-200">
          We are a one-stop destination for verified old trucks, original spare parts, and trusted repair services. 
          Our mission is to support the logistics industry by connecting transporters, sellers, and workshops under one reliable platform.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;

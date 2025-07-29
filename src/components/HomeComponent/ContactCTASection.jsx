import React from "react";
import { Link } from "react-router-dom";

const ContactCTASection = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-yellow-600 text-black text-center">
      <h2 className="text-3xl font-bold mb-4">Need Help or Have Questions?</h2>
      <p className="mb-6">Our team is here to assist you. Reach out to us anytime!</p>
      <Link to="/contact">
        <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
          Contact Us
        </button>
      </Link>
    </section>
  );
};

export default ContactCTASection;

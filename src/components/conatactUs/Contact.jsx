import React from 'react';
import contactImg from '../../assets/contact/img.jpg';

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-black/80 px-4 py-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-10 items-stretch">
        <div className="w-full md:w-1/2 flex flex-col justify-center"> 
          <form className="bg-white p-6 rounded-xl shadow space-y-4 h-full">
             <h2 className="text-4xl font-bold mb-6 text-gray-400">Get in Touch</h2>
          <p className="text-black mb-6">
            Have a question about our truck repair services, spare parts, or old truck deals? Fill out the form and our team will get back to you shortly.
          </p>
            <input type="text" placeholder="Full Name" className="w-full border p-3 rounded" />
            <input type="email" placeholder="Email Address" className="w-full border p-3 rounded" />
            <input type="tel" placeholder="Phone Number" className="w-full border p-3 rounded" />
            <textarea rows="4" placeholder="Your Message" className="w-full border p-3 rounded"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Send Message</button>
          </form>
        </div>

        <div className="w-full md:w-1/2 relative flex">
          <div className="relative w-full h-full">
            <img
              src={contactImg}
              alt="Contact Us"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-black/80 rounded-xl flex flex-col items-center justify-center text-center px-6 py-10">
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">Contact Information</h3>
              <p className="text-gray-200">📍 NH 44, Industrial Area, Ludhiana, Punjab, India</p>
              <p className="text-gray-200">📞 +91 98765 43210</p>
              <p className="text-gray-200">✉️ support@automotivesolution.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

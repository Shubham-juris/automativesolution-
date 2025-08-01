import React, { useState } from 'react';
import contactImg from '../../assets/contact/img.jpg';

const ContactPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Required';
    if (!form.email.trim()) newErrors.email = 'Required';
    if (!form.phone.trim()) newErrors.phone = 'Required';
    if (!form.message.trim()) newErrors.message = 'Required';

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    alert('Message sent successfully!');
    setForm({ fullName: '', email: '', phone: '', message: '' });
    setErrors({});
  };

  const inputClass = (field) =>
    `w-full border p-3 rounded focus:outline-none ${
      errors[field] ? 'border-red-500' : 'border-gray-300'
    }`;

  return (
    <section className="min-h-screen bg-black/80 px-4 py-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-10 items-stretch">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <form
            className="bg-white p-6 rounded-xl shadow space-y-4 h-full"
            onSubmit={handleSubmit}
            noValidate
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-400">Get in Touch</h2>
            <p className="text-black mb-6">
              Have a question about our truck repair services, spare parts, or old truck deals? Fill out the form and our team will get back to you shortly.
            </p>

            <div>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                className={inputClass('fullName')}
              />
              {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className={inputClass('email')}
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className={inputClass('phone')}
              />
              {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className={inputClass('message')}
              ></textarea>
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full cursor-pointer"
            >
              Send Message
            </button>
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
              <p className="text-gray-200">📍 Alberta, Canada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

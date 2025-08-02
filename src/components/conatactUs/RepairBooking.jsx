import React, { useState } from 'react';
import repairImg from '../../assets/repair/img2.jpg';

const RepairBooking = () => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    issue: '',
    location: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Required';
    if (!form.phone.trim()) newErrors.phone = 'Required';
    if (!form.issue.trim()) newErrors.issue = 'Required';
    if (!form.location.trim()) newErrors.location = 'Required';

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    alert('Booking submitted successfully!');
    setForm({
      fullName: '',
      phone: '',
      issue: '',
      location: '',
      message: '',
    });
    setErrors({});
  };

  const inputClass = (field) =>
    `w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
      errors[field] ? 'border-red-500' : 'border-gray-300'
    }`;

  return (
    <section className="bg-black text-white py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="bg-white text-black w-full md:w-1/2 p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Truck Repair Booking Form</h2>
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="block font-semibold mb-1" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Type here"
                value={form.fullName}
                onChange={handleChange}
                className={inputClass('fullName')}
              />
              {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 9876543210"
                value={form.phone}
                onChange={handleChange}
                className={inputClass('phone')}
              />
              {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1" htmlFor="issue">
                Truck Issue
              </label>
              <input
                id="issue"
                name="issue"
                type="text"
                placeholder="Describe your issue"
                value={form.issue}
                onChange={handleChange}
                className={inputClass('issue')}
              />
              {errors.issue && <p className="text-red-600 text-sm mt-1">{errors.issue}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1" htmlFor="location">
                Preferred Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="City / Workshop Name"
                value={form.location}
                onChange={handleChange}
                className={inputClass('location')}
              />
              {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1" htmlFor="message">
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Any additional info..."
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300 cursor-pointer"
            >
              Submit Request
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
          <img src={repairImg} alt="Truck Repair" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
              Need Reliable <br />
              <span className="text-yellow-400">Truck Repair Support?</span>
              <br />
              We’re Just a Call Away!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairBooking;

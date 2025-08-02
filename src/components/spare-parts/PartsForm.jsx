import React, { useState } from 'react';

const PartsInquiryForm = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    model: '',
    details: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateEmail = (email) => {
    // simple email regex
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Required';
    if (!form.email.trim()) newErrors.email = 'Required';
    else if (!validateEmail(form.email)) newErrors.email = 'Invalid email';
    if (!form.model.trim()) newErrors.model = 'Required';
    if (!form.details.trim()) newErrors.details = 'Required';

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    alert('Inquiry submitted successfully!');
    setForm({ fullName: '', email: '', model: '', details: '' });
    setErrors({});
  };

  const inputClass = (field) =>
    `w-full border p-3 rounded focus:outline-none ${
      errors[field] ? 'border-red-500' : 'border-gray-300'
    }`;

  return (
    <section className="py-16 px-4 bg-black/80">
      <h2 className="text-3xl text-amber-300 font-semibold text-center mb-8">Request a Spare Part</h2>
      <form
        className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow space-y-4"
        onSubmit={handleSubmit}
        noValidate
      >
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
            name="model"
            type="text"
            placeholder="Truck Brand & Model"
            value={form.model}
            onChange={handleChange}
            className={inputClass('model')}
          />
          {errors.model && <p className="text-red-600 text-sm mt-1">{errors.model}</p>}
        </div>

        <div>
          <textarea
            name="details"
            rows="4"
            placeholder="Part Required & Details"
            value={form.details}
            onChange={handleChange}
            className={inputClass('details')}
          ></textarea>
          {errors.details && <p className="text-red-600 text-sm mt-1">{errors.details}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full cursor-pointer"
        >
          Submit Inquiry
        </button>
      </form>
    </section>
  );
};

export default PartsInquiryForm;

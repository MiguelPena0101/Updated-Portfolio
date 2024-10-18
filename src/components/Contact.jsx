import { useState } from 'react';  // Import useState from React

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-royalBlue">Contact Me</h2>
        <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="border-2 border-gray-300 p-3 w-full rounded-md focus:border-royalBlue"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="border-2 border-gray-300 p-3 w-full rounded-md focus:border-royalBlue"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          
          <textarea
            name="message"
            placeholder="Your Message"
            className="border-2 border-gray-300 p-3 w-full rounded-md focus:border-royalBlue"
            value={formData.message}
            onChange={handleInputChange}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
          
          <button type="submit" className="bg-royalBlue text-white py-2 px-4 rounded-md">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

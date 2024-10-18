import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Send email via EmailJS
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID, // Access environment variable via import.meta.env
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Access environment variable via import.meta.env
          formData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Access environment variable via import.meta.env
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSuccessMessage('Your message has been sent successfully!');
            setFormData({ name: '', email: '', message: '' });
          },
          (err) => {
            console.error('FAILED...', err);
          }
        );
    } else {
      setErrors(newErrors);
    }
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
        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;

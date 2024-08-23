import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      if (result.text === 'OK') {
        setStatusMessage('Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatusMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-md w-full max-w-lg text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="mb-4 text-center">We would love to hear from you! Whether you have a question about the stories, need assistance, or just want to share your thoughts, feel free to reach out.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-3 py-2 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          {statusMessage && <p className="text-center mb-4 text-sm text-green-400">{statusMessage}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-full shadow hover:shadow-lg transition duration-300 w-full"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

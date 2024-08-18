import React from 'react';

const ContactPage = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-md w-full max-w-lg text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="mb-4 text-center">We would love to hear from you! Whether you have a question about the stories, need assistance, or just want to share your thoughts, feel free to reach out.</p>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              className="w-full px-3 py-2 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Message"
              rows={5}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-full shadow hover:shadow-lg transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

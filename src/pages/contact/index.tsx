'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useUIStore } from '@/store';
import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const theme = useUIStore((state) => state.theme);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    <div className="min-h-screen bg-white dark:bg-[#0f1116] text-gray-900 dark:text-white flex flex-col md:flex-row transition-colors duration-300 pt-14 md:pt-0">
      
      {/* Left: Contact Form */}
      <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex items-center justify-center">
        <div className="w-full max-w-lg space-y-8">
          <div className="w-full max-w-md space-y-8">
            <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Got a suggestion, a story to tell, or a question? We’d love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm font-medium block mb-1" >Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium block mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium block mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
              />
            </div>

            {statusMessage && (
              <p className="text-sm text-green-600 dark:text-green-400">{statusMessage}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 text-white font-medium rounded-lg bg-blue-600 hover:bg-blue-700 transition disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Right: Contact Info */}
      <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-center text-center space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Reach Us</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            For collaborations, partnerships, or feedback—feel free to drop us a line.
          </p>
        </div>

        <div className="flex items-center gap-3 text-gray-800 dark:text-gray-300 text-sm">
          <Mail className="w-5 h-5" />
          <span>work@storyloom.in</span>
        </div>

        <div className="flex gap-6 pt-4 text-gray-500">
          <a href="https://instagram.com/storyloom" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
          </a>
          <a href="https://twitter.com/storyloom" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="w-5 h-5 hover:text-sky-500 transition" />
          </a>
          <a href="https://linkedin.com/company/storyloom" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 hover:text-blue-600 transition" />
          </a>
        </div>

        <div className="pt-6 text-sm text-gray-500 dark:text-gray-400">
          <p>StoryLoom Inc.</p>
          {/* <p>Kota, Rajasthan, India</p> */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

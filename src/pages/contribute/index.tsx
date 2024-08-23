import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContributePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    genre: '',
    imageUrl: '',
    story: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_WRITER_ID!,
        {
          name: formData.name,
          email:formData.email,
          title: formData.title,
          genre: formData.genre,
          imageUrl: formData.imageUrl,
          story: formData.story,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      if (result.text === 'OK') {
        setStatusMessage('Your story has been submitted, the team will get back to you.');
        setFormData({ name: '',email:'', title: '', genre: '', imageUrl: '', story: '' });
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
    <div className="text-white min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center">Contribute Your Story</h1>

        {/* Introduction Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Why Contribute?</h2>
          <p className="text-lg">
            At StoryLoom, we believe in the power of storytelling. Your stories can transport readers to new worlds,
            introduce them to new perspectives, and spark their imaginations. Whether you have a folktale to share, a
            fictional narrative, or a personal experience, we welcome your contribution.
          </p>
        </section>

        {/* Submission Guidelines */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Submission Guidelines</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Ensure your story is original and not published elsewhere.</li>
            <li>We accept stories between 1,000 to 5,000 words.</li>
            <li>Provide a title and genre for your story.</li>
            <li>Submit your story in English or include a translation if written in another language.</li>
            <li>Include an image URL relevant to your story.</li>
          </ul>
        </section>

        {/* Submission Form */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Submit Your Story</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">Your E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
          
            <div>
              <label htmlFor="title" className="block text-lg font-medium">Story Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div>
              <label htmlFor="genre" className="block text-lg font-medium">Genre</label>
              <select
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option value="">Select a Genre</option>
                <option value="fantasy">Fantasy</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="mystery">Mystery</option>
                <option value="romance">Romance</option>
                <option value="horror">Horror</option>
                <option value="non-fiction">Non-Fiction</option>
              </select>
            </div>
            <div>
              <label htmlFor="imageUrl" className="block text-lg font-medium">Image URL</label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div>
              <label htmlFor="story" className="block text-lg font-medium">Story Text</label>
              <textarea
                id="story"
                name="story"
                value={formData.story}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows={10}
                required
              />
            </div>
            {statusMessage && <p className="text-center text-sm text-green-400">{statusMessage}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-400 transition-colors duration-300"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Story'}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContributePage;

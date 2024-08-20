import React from 'react';

const ContributePage = () => {
  return (
    <div className="text-white min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center">Contribute Your Story</h1>

        {/* Introduction Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Why Contribute?</h2>
          <p className="text-lg">
            At StoryLoom, we believe in the power of storytelling. Your stories can transport readers to new worlds, introduce them to new perspectives, and spark their imaginations. Whether you have a folktale to share, a fictional narrative, or a personal experience, we welcome your contribution.
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
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
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
                className="w-full mt-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div>
              <label htmlFor="genre" className="block text-lg font-medium">Genre</label>
              <select
                id="genre"
                name="genre"
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
                {/* Add more genres as needed */}
              </select>
            </div>
            <div>
              <label htmlFor="imageUrl" className="block text-lg font-medium">Image URL</label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                className="w-full mt-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div>
              <label htmlFor="story" className="block text-lg font-medium">Story Text</label>
              <textarea
                id="story"
                name="story"
                className="w-full mt-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows={10}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-400 transition-colors duration-300"
            >
              Submit Story
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContributePage;

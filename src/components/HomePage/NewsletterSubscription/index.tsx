import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import emailjs from 'emailjs-com';

const StoryloomSubscription = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = {
      name: 'Storyloom Submission', 
      email,
      message: 'Subscribed to Storyloom',
    };

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      if (result.text === 'OK') {
        setStatusMessage('Your subscription was successful!');
        setIsSubscribed(true);
        setEmail(''); // Clear the email input
      } else {
        setStatusMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatusMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-[60vh] flex items-center text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        {!isSubscribed ? (
          <div>
            <h2 className="text-4xl font-bold mb-6">Get Story Updates</h2>
            <p className="text-lg mb-8">
              Stay updated with the latest stories! Subscribe now to receive the latest content directly to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
                className="p-3 mb-4 w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={loading}
                className={`w-80 p-3 text-white rounded-md ${loading ? 'bg-gray-400' : 'bg-gradient-to-r from-blue-400 to-blue-500 hover:shadow-lg'}`}
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {statusMessage && (
              <p className="text-center mt-4 text-lg">{statusMessage}</p>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-4xl font-bold mb-6">Subscribed to Storyloom</h2>
            <p className="text-lg mb-8">
              You will now receive updates on new stories. Stay tuned!
            </p>
            <Link
              href="/storie"
              className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-full shadow hover:shadow-lg transition duration-300"
            >
              Explore Stories
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default StoryloomSubscription;

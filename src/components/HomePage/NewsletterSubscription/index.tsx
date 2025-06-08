"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import emailjs from "emailjs-com";

const StoryloomSubscription = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const formData = {
      name: "Storyloom Submission",
      email,
      message: "Subscribed to Storyloom",
    };

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      if (result.text === "OK") {
        setStatusMessage("You're subscribed! 🎉");
        setIsSubscribed(true);
        setEmail("");
      } else {
        setStatusMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="">
      <div className="w-full text-left">
          <>
            <form
              onSubmit={handleSubmit}
              className="flex sm:flex-row items-center sm:gap-0"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
                className="w-64 px-4 py-2 rounded-l-xl sm:rounded-l-xl sm:rounded-r-none bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <button
                type="submit"
                disabled={loading}
                className={`w-full sm:w-28 py-2 px-4 text-white rounded-r-xl sm:rounded-r-xl sm:rounded-l-none transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </>

      </div>
    </section>
  );
};

export default StoryloomSubscription;

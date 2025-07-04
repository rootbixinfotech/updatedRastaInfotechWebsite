import React, { useState } from "react";

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-[500px] bg-[#51A2FF] px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-8 max-w-5xl w-full">
        {/* Left Side: Geometric shapes grid */}
        <div className="grid grid-cols-5 gap-2 mx-auto">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-400 rounded-sm"
              style={{
                backgroundColor: i % 2 === 0 ? "#5C5CFF" : "#d1d5ff",
                borderRadius: i % 3 === 0 ? "9999px" : "0",
              }}
            />
          ))}
        </div>

        {/* Right Side: Text and input */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Subscribe to newsletter
          </h2>
          <p className="text-gray-500 mb-4 text-sm">
            Join our community of subscribers and receive regular updates
            delivered straight to your inbox. It's quick, easy, and free
          </p>

          <ul className="text-sm text-gray-700 space-y-2 mb-4 sm:mb-6">
            <li className="flex items-center justify-center md:justify-start">
              <span className="w-3 h-3 bg-indigo-500 rounded-full inline-block mr-2"></span>
              24×7 chat support of any time
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="w-3 h-3 bg-indigo-500 rounded-full inline-block mr-2"></span>
              Library of our specialist team
            </li>
          </ul>

          <form className="flex flex-col sm:flex-row items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Your email id.."
              className="w-full sm:flex-1 rounded-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full hover:from-blue-600 hover:to-blue-500 transition w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>

          {submitted && (
            <p className="text-green-600 mt-4 text-sm">Thanks for subscribing!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

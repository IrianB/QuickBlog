import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Subscribe to our Newsletter
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get the latest updates and news delivered straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 w-full px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full">
      {/* Hero Background */}
      <div
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center md:justify-end"
        style={{ backgroundImage: "url('/hero_banner.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/50"></div>

        {/* Content */}
        <div className="relative text-center md:text-left max-w-2xl px-6 md:px-4 md:mr-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold text-white leading-tight">
            Dive into the <br className="hidden sm:block" /> wonders of the sea
          </h1>
          <p className="text-white/80 mt-4 text-sm sm:text-base font-roboto">
            Discover a world of aquatic treasures at our store—where every
            creature has a story to tell.
          </p>
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 duration-300  text-white font-semibold rounded-lg shadow-lg transition">
            Explore collection
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 -mt-12 px-4">
        {/* First Stat Box: Numerical Stats */}
        <div className="bg-white p-4 rounded-xl shadow-md flex justify-around items-center w-full md:w-auto">
          {/* Stat 1 */}
          <div className="flex flex-col items-center px-2">
            <h3 className="text-lg font-bold">5k+</h3>
            <p className="text-gray-500 text-xs">Products</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center px-2">
            <h3 className="text-lg font-bold">15k+</h3>
            <p className="text-gray-500 text-xs">Happy Customers</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center px-2">
            <h3 className="text-lg font-bold">⭐ 4.5</h3>
            <p className="text-gray-500 text-xs">Ratings</p>
          </div>
        </div>

        {/* Second Stat Box */}
        <div className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center w-full md:w-auto">
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-md font-bold">Sustainable</h3>
            <p className="text-gray-500 text-xs">sourced</p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-8 w-px bg-gray-300 mx-4"></div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <h3 className="text-md font-bold">Premium</h3>
            <p className="text-gray-500 text-xs">Quality</p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-8 w-px bg-gray-300 mx-4"></div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <h3 className="text-md font-bold">Fast</h3>
            <p className="text-gray-500 text-xs">Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

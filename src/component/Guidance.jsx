import React from 'react';

// Correctly import images from the public directory
import g1Image from '/g1.jpg';
import g2Image from '/g2.jpg';
import g3Image from '/g3.png';

const Guidance = () => {
  return (
    <div className="w-full bg-blue-900 px-4 rounded-tl-3xl rounded-tr-3xl">
      <div className="relative w-full max-w-7xl mx-auto rounded-3xl shadow-xl overflow-hidden md:my-24">
        {/* Background with rounded corners and side margins */}
        <div className="relative w-full bg-blue-900 text-white rounded-3xl m-0 p-8 md:p-12 lg:p-16">
          
          {/* Top Section */}
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Get Our Guidance
            </h2>
            <p className="text-gray-300 max-w-2xl">
              From setup to maintenance, our experts are here to help you create and maintain the perfect aquarium
            </p>
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg text-white font-semibold rounded-lg">
              Ask an Expert
            </button>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8">
            {/* Card 1 */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={g1Image}
                alt="Read Our Guides"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0   transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold mb-1">Read Our Guides</h3>
                <p className="text-sm text-gray-200">
                  Learn the basics of fish care, tank setup, and maintenance.
                </p>
                <a href="#" className="absolute bottom-4 right-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg md:row-span-2">
              <img
                src={g3Image}
                alt="Ask an Expert"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold mb-1">Ask an Expert</h3>
                <p className="text-sm text-gray-200">
                  Aquarists guide you through every aquarium problem.
                </p>
                <a href="#" className="absolute bottom-4 right-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={g2Image}
                alt="Watch Tutorials"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0  transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold mb-1">Watch Tutorials</h3>
                <p className="text-sm text-gray-200">
                  Watch about feeding, cleaning, and aquascaping.
                </p>
                <a href="#" className="absolute bottom-4 right-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidance;
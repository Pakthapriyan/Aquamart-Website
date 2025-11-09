import React from 'react';
import dodImg from "/dod.jpg"; // if in src/assets

const DealOfTheDay = () => {
  return (
    <section className="w-full bg-blue-900 py-16 px-4">
      <div className="max-w-6xl mx-auto rounded-3xl shadow-2xl overflow-hidden md:flex">
        
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center p-8">
          <img 
            src={dodImg} 
            alt="Premium Aquarium Starter Kit" 
            className="w-full h-auto rounded-3xl object-cover shadow-xl"
          />
        </div>

        {/* Text and CTA Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 text-white">
          <p className="text-sm font-semibold text-orange-300 uppercase tracking-wide mb-2">Deal of the Day</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Premium Aquarium Starter Kit</h2>
          <p className="text-base text-gray-300 mb-6">
            Complete 20-gallon aquarium kit with LED lighting, filtration system, heater, and premium decorations. Perfect for beginners!
          </p>
          
          <div className="flex items-center mb-6">
            <span className="text-3xl font-bold">Rs. 2999</span>
            <div className="flex ml-4 text-yellow-400">
              {Array(5).fill(0).map((_, i) => (
                <span key={i} className="text-2xl">★</span>
              ))}
            </div>
          </div>
          
          <button 
            aria-label="Shop Aquarium Starter Kit Deal"
            className="w-full md:w-auto px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg"
          >
            Shop the Deal
          </button>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;

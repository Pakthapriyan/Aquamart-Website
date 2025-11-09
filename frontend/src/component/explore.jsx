import React from "react";

// Import images
import eoc1Image from "/eoc1.jpg";
import eoc2Image from "/eoc2.jpg";
import eoc3Image from "/eoc3.jpg";
import eoc4Image from "/eoc4.jpg";

const Explore = () => {
  const collections = [
    {
      id: 1,
      title: "Turtle Haven",
      description:
        "Curated essentials to keep your aquatic turtle healthy, active, and thriving.",
      price: "1999",
      rating: 4.7,
      imageUrl: eoc1Image,
    },
    {
      id: 2,
      title: "Luxury Tank Decor",
      description: "Premium decorations for sophisticated setups.",
      price: "1999",
      rating: 4.8,
      imageUrl: eoc2Image,
    },
    {
      id: 3,
      title: "Healthy Tank Essentials",
      description: "Complete care package for optimal fish health.",
      price: "1999",
      rating: 4.5,
      imageUrl: eoc3Image,
    },
    {
      id: 4,
      title: "Rare & Exotic Fish",
      description: "Curated selection of unique aquatic species.",
      price: "1999",
      rating: 4.9,
      imageUrl: eoc4Image,
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-12 relative text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore All Collections
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Carefully curated product sets designed by aquarium experts for every
          experience level
        </p>
        <a href="#" className="absolute right-0 top-1/2 -translate-y-1/2 text-blue-500 hover:underline hidden lg:block">
          view all
        </a>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            {/* Image */}
            <img
              src={collection.imageUrl}
              alt={collection.title}
              className="w-full h-52 object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {collection.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {collection.description}
                </p>
              </div>

              {/* Price + Rating */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm font-semibold text-gray-800">
                  From Rs. {collection.price}
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-yellow-500 mr-1">★</span>
                  {collection.rating}
                </div>
              </div>

              {/* Button at bottom */}
              <button className="mt-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm px-4 py-2 rounded-md hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
import React from 'react';

// Correctly import images from the public directory
import tc1Image from '/tc1.jpg';
import tc2Image from '/tc2.jpg';

const TopCollection = () => {
  const collections = [
    {
      id: 1,
      name: 'Aquascaping Masterpieces',
      description: 'Premium stones, driftwood, and live plants for creative setups, Artistic layouts, aquascaping kits, Inspiration guides.',
      price: '1499',
      rating: 4,
      imageUrl: tc1Image, // Use the imported image variable
      badge: 'Sale-50 off',
    },
    {
      id: 2,
      name: 'Marine Majesty',
      description: 'Complete your saltwater setup with our exclusive reef collection—everything from corals and fish to treatments and equipment.',
      price: '1999',
      rating: 5,
      imageUrl: tc2Image, // Use the imported image variable
      badge: 'Sale-50 off',
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="w-full bg-white py-16 px-4 mt-25 mb-25">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Top Collections</h2>
        <div className='relative'> {/* Changed to relative for absolute positioning of 'view all' */}
          <p className="text-gray-500 mt-2 mx-auto max-w-xl"> {/* Added mx-auto and max-w-xl for centering and width */}
            Hand-selected bundles featuring premium fish, tanks, and accessories - everything you need to build your dream aquarium
          </p>
          <a href="#" className="absolute right-0 top-1/2 -translate-y-1/2 text-blue-500 hover:underline"> {/* Absolute positioning */}
            view all
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((collection) => (
          <div key={collection.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative">
              <img
                src={collection.imageUrl}
                alt={collection.name}
                className="w-full h-64 object-cover"
              />
              {collection.badge && (
                <span className="absolute top-4 left-4 bg-yellow-400 text-gray-800 text-sm font-semibold py-1 px-3 rounded-full">
                  {collection.badge}
                </span>
              )}
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{collection.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{collection.description}</p>
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-bold text-gray-800">
                    Rs. {collection.price}
                    </p>
                    <div className="flex items-center">
                    {renderStars(collection.rating)}
                    </div>
                </div>
              <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-500 duration-300 shadow-lg transition">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCollection;
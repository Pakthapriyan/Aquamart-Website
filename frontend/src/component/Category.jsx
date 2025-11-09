import React from 'react';

const Category = () => {
  const categories = [
    { name: 'Aquatic Pets', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.01c0 1.1-.9 1.99-2 1.99s-2-.89-2-1.99.9-1.99 2-1.99 2 .89 2 1.99zM12 11c-1.66 0-3 1.34-3 3h6c0-1.66-1.34-3-3-3z' },
    { name: 'Tanks', icon: 'M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z' },
    { name: 'Food', icon: 'M19 8H5c-1.1 0-2 .9-2 2v2h18v-2c0-1.1-.9-2-2-2zM3 16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2H3v2zm14-5.5V13h-4v-2.5h4zM11 11.5v-2h-4v2h4z' },
    { name: 'Equipment', icon: 'M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
    { name: 'Plants', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2V7h2v9zm2.5-4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z' },
    { name: 'Accessories', icon: 'M16.5 6c-2.47 0-4.5 2.03-4.5 4.5S14.03 15 16.5 15s4.5-2.03 4.5-4.5-2.03-4.5-4.5-4.5zM16.5 13c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
    { name: 'Water Care', icon: 'M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm-1-12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' },
  ];

  return (
    <div className="flex flex-col items-center py-12 px-4 mt-30 mb-30 md:py-20 bg-white ">
      <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-10">
        Browse by category
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-8 max-w-6xl w-full">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center text-center p-4"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-blue-300 rounded-full flex items-center justify-center mb-4 hover:from-blue-600 hover:to-cyan-500 transition-all  transform hover:scale-105 duration-300 shadow-lg">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d={category.icon} />
              </svg>
            </div>
            <p className="text-sm sm:text-base font-semibold text-gray-700">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

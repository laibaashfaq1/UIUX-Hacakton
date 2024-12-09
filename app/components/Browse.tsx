import React from 'react';
import Image from 'next/image'; // Using Next.js Image component

// Array of blog images with titles and sources
const destinationItems = [
    { 
      id: 1, 
      title: 'Dining',  
      src: '/dining.png' 
    },
    { 
      id: 2, 
      title: 'Living',  
      src: '/livingroom.png' 
    },
    { 
      id: 3, 
      title: 'Bedroom',  
      src: '/bedroom.png' 
    },
];

const Browse = () => {
  return (
    <div id="browse" className="container mx-auto pt-16 px-8 md:px-16 lg:px-24">
      {/* Title Section */}
      <div className="text-center px-4 lg:px-0 mb-14">
        <h1 className="text-5xl md:text-6xl font-bold text-black font-sans">
          Browse The Range
        </h1>
        <p className="text-normal md:text-normal font-medium text-black font-serif mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Browse Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        {destinationItems.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Product Image */}
            <Image 
              src={item.src} 
              alt={item.title} 
              width={500} 
              height={300} 
              className="object-cover w-full"
            />

            {/* Card Footer (Title) */}
            <div className="p-4">
              <h4 className="mt-2 text-lg font-semibold text-gray-800">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;

import React from 'react';
import g1 from '../assets/images/gallary/1.jpg';
import g2 from '../assets/images/gallary/3.jpg';
import g3 from '../assets/images/gallary/6.jpg';
import g4 from '../assets/images/gallary/8.jpg';
import g5 from '../assets/images/gallary/9.jpg';
import g6 from '../assets/images/gallary/4.jpg';

const PhotoGallery = () => {
  const photos = [
    {
      image: g1,
      category: 'Wedding',
      title: 'Beautiful Wedding Ceremony',
    },
    {
      image: g2,
      category: 'Couple',
      title: 'Happy Moments',
    },
    {
      image: g4,
      category: 'Wedding',
      title: 'Traditional Ceremony',
    },
    {
      image: g3,
      category: 'Couple',
      title: 'Love Story',
    },
    {
      image: g5,
      category: 'Wedding',
      title: 'Special Day',
    },
    {
      image: g6,
      category: 'Couple',
      title: 'Together Forever',
    },
  ];

  // Helper function to assign unique grid spans based on index.
  const getGridClasses = (index) => {
    switch (index) {
      case 0:
        return "lg:col-span-2 lg:row-span-2";
      case 2:
        return "lg:row-span-2";
      case 3:
        return "lg:col-span-2";
      default:
        return "";
    }
  };

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Photo Gallery</p>
          <h2 className="section-title text-3xl md:text-4xl font-bold">Our Happy Moments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Browse through our collection of beautiful wedding moments and happy couples.
            These photos capture the joy and love that our platform has helped create.
          </p>
        </div>

        {/* Dense, responsive grid with fixed row height */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-flow-dense gap-4 auto-rows-[200px]">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg ${getGridClasses(index)}`}
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-sm font-medium">{photo.category}</span>
                  <h3 className="text-white text-xl font-semibold mt-1">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary px-6 py-3 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-300">
            View More Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;

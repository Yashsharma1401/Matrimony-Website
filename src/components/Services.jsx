import React from 'react';
import coupleIcon1 from '../assets/images/icon/couple.png';
import bg1 from '../assets/images/ban-bg.jpg';
import coupleIcon2 from '../assets/images/icon/photo-camera.png';
import bg2 from '../assets/images/couples/7.jpg';
import coupleIcon3 from '../assets/images/icon/gate.png';
import bg3 from '../assets/images/couples/8.jpg';
import coupleIcon4 from '../assets/images/icon/cake.png';
import bg4 from '../assets/images/couples/9.jpg';

const serviceItems = [
  {
    title: 'All Services',
    desc: '1200+ Profiles',
    icon: coupleIcon1, // your icon
    bgImage: bg1, // your background image
  },
  {
    title: 'Wedding',
    desc: '1200+ Profiles',
    icon: coupleIcon2,
    bgImage: bg2,
   
  },
  {
    title: 'All Services',
    desc: '1200+ Profiles',
    icon: coupleIcon3,
    bgImage: bg3,

  },
  {
    title: 'Wedding',
    desc: '1200+ Profiles',
    icon: coupleIcon4,
    bgImage: bg4,
 
  },
];

const Services = () => {
  return (
    <section className="relative bg-black py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-block border-b-4 border-yellow-300 pb-2">
            Our Services
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Explore our diverse services developed to help you find your perfect match with ease.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {serviceItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="relative group rounded-2xl overflow-hidden shadow-lg h-72 transform transition-all duration-500 hover:scale-105"
              style={{
                backgroundImage: `url(${item.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
                {/* Icon that lifts on hover */}
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 mb-3 transform transition-transform duration-500 group-hover:-translate-y-2"
                />
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm mb-4">{item.desc}</p>
                <button className="mt-2 px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300">
                  View More
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

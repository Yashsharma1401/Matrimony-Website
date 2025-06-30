import React, { useEffect, useState } from 'react';
import Image1 from '../assets/banner 1.jpg';
import Image2 from '../assets/banner 2.jpg';
import Image3 from '../assets/banner 3.jpg';
import Image4 from '../assets/banner 4.jpg';

const backgrounds = [Image1, Image2, Image3, Image4];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* All Backgrounds - Crossfade */}
      {backgrounds.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${index === bgIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-10">
        <h4 className="text-xl md:text-2xl text-white font-semibold mb-2">#1 MATRIMONY</h4>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Find your <span className="text-red-500">Right Match</span> here
        </h1>
        <p className="text-lg md:text-xl text-white mt-3 mb-8">
          Most trusted Matrimony Brand in the World.
        </p>

        {/* Form */}
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center bg-white/20 p-4 rounded-lg backdrop-blur-sm">
          <select className="p-2 rounded text-black w-48">
            <option>I’m looking for</option>
            <option>Groom</option>
            <option>Bride</option>
          </select>
          <select className="p-2 rounded text-black w-32">
            <option>Age</option>
            <option>18-25</option>
            <option>26-35</option>
            <option>36-45</option>
          </select>
          <select className="p-2 rounded text-black w-48">
            <option>Religion</option>
            <option>Hindu</option>
            <option>Muslim</option>
            <option>Christian</option>
          </select>
          <select className="p-2 rounded text-black w-48">
            <option>Location</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
          </select>
          <button className="bg-slate-500 hover:bg-slate-600 text-white px-6 py-2 rounded font-medium transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

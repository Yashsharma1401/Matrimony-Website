import React from "react";
import coupleIcon1 from '../assets/images/icon/rings.png';
import coupleIcon2 from '../assets/images/icon/prize.png';
import coupleIcon3 from '../assets/images/icon/trust.png';

const WhyChoose = () => {
  return (
    <div className="relative">

      {/* Header Section */}
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-700 text-white py-20 overflow-visible">
        {/* Image Overlay - Centered & Half Overlapping */}
        <div className="absolute top-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          {/* <img
            src={People}
            alt="People"
            className="w-100 md:w-80 h-auto"
          /> */}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 mb-20 text-center">
          <p className="text-yellow-400 font-semibold tracking-wide mb-2">#1 WEDDING WEBSITE</p>
          <h1 className="text-4xl md:text-5xl font-bold text-teal-400">Why choose us</h1>
          <p className="text-lg md:text-xl mt-4">
            Most Trusted and premium Matrimony Service in the World.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto pt-20 absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <img
              src={coupleIcon1}
              alt="Award Icon"
              className="mx-auto mb-4 w-12"
            />
            <h2 className="text-xl font-bold mb-2">Genuine profiles</h2>
            <p className="text-gray-600">
              Contact genuine profiles with 100% verified mobile
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <img
              src={coupleIcon2}
              alt="Trust Icon"
              className="mx-auto mb-4 w-12"
            />
            <h2 className="text-xl font-bold mb-2">Most trusted</h2>
            <p className="text-gray-600">
              The most trusted wedding matrimony brand lorem
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <img
              src={coupleIcon3}
              alt="Heart Icon"
              className="mx-auto mb-4 w-12"
            />
            <h2 className="text-xl font-bold mb-2">2000+ weddings</h2>
            <p className="text-gray-600">
              Lakhs of people have found their life partner
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WhyChoose;

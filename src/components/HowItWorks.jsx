import React from 'react';

import ringsIcon from '../assets/images/icon/rings.png';
import wedding2Icon from '../assets/images/icon/wedding-2.png';
import loveBirdsIcon from '../assets/images/icon/love-birds.png';
import networkIcon from '../assets/images/icon/network.png';
import chatIcon from '../assets/images/icon/chat.png';
import weddingCoupleIcon from '../assets/images/icon/wedding-couple.png';

const steps = [
  {
    icon: ringsIcon,
    title: "Register",
    time: "7:00 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: wedding2Icon,
    title: "Find your Match",
    time: "7:00 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: loveBirdsIcon,
    title: "Send Interest",
    time: "7:00 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: networkIcon,
    title: "Get Profile Information",
    time: "7:00 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: chatIcon,
    title: "Start Meetups",
    time: "7:00 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: weddingCoupleIcon,
    title: "Getting Married",
    time: "7:00 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-pink-600 font-semibold uppercase">Moments</p>
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            How it works
            <span className="absolute left-1/2 bottom-[-10px] transform -translate-x-1/2 w-20 h-1 bg-pink-400 rounded-full"></span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative items-center">
          {/* Vertical Line in the Center */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-400 to-transparent"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0; // 0-indexed: even-index steps
              return (
                <div key={index} className="flex justify-center md:flex-row items-center">
                  {isEven ? (
                    <>
                      {/* Icon on Left */}
                      <div className="w-full md:w-1/3 flex justify-end pr-8">
                        <div className="bg-white border border-gray-200 rounded-full shadow-xl p-4">
                          <img
                            src={step.icon}
                            alt={step.title}
                            className="w-16 h-16 object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      {/* Center Timeline with Blinking Dot */}
                      <div className="flex flex-col items-center md:mx-4 relative">
                        <div className="relative">
                          {/* Ping effect */}
                          <span className="block w-5 h-5 bg-pink-600 rounded-full animate-ping absolute inset-0"></span>
                          <span className="relative block w-5 h-5 bg-pink-600 rounded-full"></span>
                        </div>
                      </div>
                      {/* Text on Right */}
                      <div className="w-full md:w-1/3 flex justify-start pl-8 text-left">
                        <div>
                          <h5 className="text-2xl font-semibold text-gray-800">
                            {step.title}
                          </h5>
                          <span className="text-gray-500 text-sm block mt-1 mb-2">
                            {step.time}
                          </span>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Text on Left */}
                      <div className="w-full md:w-1/3 flex justify-end pr-8 text-right">
                        <div>
                          <h5 className="text-2xl font-semibold text-gray-800">
                            {step.title}
                          </h5>
                          <span className="text-gray-500 text-sm block mt-1 mb-2">
                            {step.time}
                          </span>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                      {/* Center Timeline with Blinking Dot */}
                      <div className="flex flex-col items-center md:mx-4 relative">
                        <div className="relative">
                          <span className="block w-5 h-5 bg-pink-600 rounded-full animate-ping absolute inset-0"></span>
                          <span className="relative block w-5 h-5 bg-pink-600 rounded-full"></span>
                        </div>
                      </div>
                      {/* Icon on Right */}
                      <div className="w-full md:w-1/3 flex justify-start pl-8">
                        <div className="bg-white border border-gray-200 rounded-full shadow-xl p-4">
                          <img
                            src={step.icon}
                            alt={step.title}
                            className="w-16 h-16 object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

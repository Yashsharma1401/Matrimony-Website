import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Pic1 from '../assets/images/about/1.jpg';
import Pic2 from '../assets/images/Couples/20.jpg';

const AboutWeddingMatrimony = () => {
  return (
    <div className="flex flex-wrap m-10">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 relative mb-12">
        {/* Yellow Circle */}
        <span className="absolute w-[100px] h-[100px] border-[7px] border-yellow-500 rounded-full -left-10 -top-8 z-0"></span>

        {/* Main Image */}
        <img
          src={Pic1}
          alt="Main"
          loading="lazy"
          className="absolute w-3/4 h-[550px] object-cover left-0 top-0 rounded-[15px] z-10"
        />

        {/* Secondary Image */}
        <img
          src={Pic2}
          alt="Couple"
          loading="lazy"
          className="relative w-4/5 h-[300px] object-cover z-20 mt-[47%] ml-[15%] border-t-[15px] border-l-[15px] border-white rounded-bl-[15px] rounded-br-[100px]"
        />

        {/* Pink Square */}
        <span className="absolute w-[200px] h-[200px] border-[7px] border-pink-200 rounded-[20px] right-2 bottom-[-4px] z-0"></span>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 px-4">
        <div className="space-y-8">
          {/* Heading Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Welcome to{" "}
              <em className="text-primary not-italic">Wedding Matrimony</em>
            </h2>
            <p className="text-gray-700 text-[15px] font-medium leading-[25px]">
              Best wedding matrimony. It is a long established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout.
            </p>
            <p className="text-gray-700 text-[15px] font-medium leading-[25px] mt-4">
              <a href="/plans" className=" underline">
                Click here
              </a>{" "}
              to Start your matrimony service now.
            </p>
          </div>

          {/* Divider Section */}
          <div className="pt-6 mt-6 border-t border-gray-300">
            <p className="text-gray-500 text-[15px] font-medium leading-[25px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>

          {/* Contact Section */}
          <div className="pt-6">
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <FaPhone className="text-pink-500 text-2xl" />
                <div>
                  <h4 className="text-lg font-semibold">
                    Enquiry{" "}
                    <em className="block text-sm font-normal text-gray-500 not-italic">
                      +91 9881216105
                    </em>
                  </h4>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <FaEnvelope className="text-pink-500 text-2xl" />
                <div>
                  <h4 className="text-lg font-semibold">
                    Get Support{" "}
                    <em className="block text-sm font-normal text-gray-500 not-italic">
                      yashsharma14jan@gmail.com
                    </em>
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWeddingMatrimony;

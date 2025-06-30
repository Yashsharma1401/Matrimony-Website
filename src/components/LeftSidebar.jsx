import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, 
  FaFacebookF, FaTwitter, FaWhatsapp as FaWhatsappIcon, 
  FaLinkedinIn, FaYoutube, FaInstagram 
} from "react-icons/fa";
import Image from "../assets/images/logo.jpeg"; // Adjust the path as necessary
import Image1 from "../assets/images/user/1.jpg"; // Adjust the path as necessary

const LeftSidebar = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-80 h-full bg-gradient-to-br from-pink-100 via-white to-purple-100 shadow-2xl p-6 z-50 overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-pink-600 hover:rotate-90 transition-transform duration-300 text-2xl"
        >
          ✖
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 mb-4 mt-6">
          <img src={Image} alt="logo" className="w-10 h-10 rounded-full" />
          <h2 className="text-lg font-bold tracking-wide">
            WEDDING <span className="text-yellow-500">MATRIMONY</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6">
          <span className="font-bold text-black">Best Wedding Matrimony</span> lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu fringilla. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 mb-6">
          <ContactItem Icon={FaPhoneAlt} text="+91 9881216105" />
          <ContactItem Icon={FaWhatsapp} text="+91 9881216105" />
          <ContactItem Icon={FaEnvelope} text="yashsharma14jan@gmail.com" />
          <ContactItem Icon={FaMapMarkerAlt} text="3812 Lena Lane City Jackson, Mixyzissippi" />
        </div>

        <hr className="my-6 border-pink-300" />

        {/* Support Team */}
        <div className="flex flex-col items-start gap-4">
          <div>
            <h3 className="text-xs text-gray-400 font-semibold mb-2">SUPPORT TEAM</h3>
            <div className="flex items-center gap-4">
              <img src={Image1} alt="Ashley Emyy" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-semibold text-sm">Ashley emyy</h4>
                <p className="text-xs text-gray-500">Senior personal advisor</p>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-700 text-white text-sm rounded hover:bg-gray-900 transition">Ask your doubts</button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center mt-6">
          {[
            FaFacebookF, FaTwitter, FaWhatsappIcon, FaLinkedinIn, FaYoutube, FaInstagram
          ].map((Icon, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="text-gray-600 hover:text-pink-600 transition text-lg"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

      </motion.div>
    </AnimatePresence>
  );
};

// Contact Item component
const ContactItem = ({ Icon, text }) => (
  <div className="flex items-center gap-3 group hover:text-pink-600 transition cursor-pointer">
    <Icon className="text-2xl text-purple-700 group-hover:text-pink-600" />
    <span className="text-sm">{text}</span>
  </div>
);

export default LeftSidebar;

import { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import Logo from '../assets/images/logo.jpeg';
import User from '../assets/images/user/1.jpg';
import { motion } from "framer-motion";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Navbar = () => {

  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  return (
    <header className="w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#4d2e00] text-white text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FaPhone className="text-[#f2d287]" />
              <span>+91 9881216105</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaEnvelope className="text-[#f2d287]" />
              <span>yashsharma14jan@gmail.com</span>
            </div>
            <FaFacebook />
            <FaTwitter />
            <FaWhatsapp />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md z-50 relative">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">

          {/* Left: Hamburger + Logo + Wave Toggle */}
          <div className="flex items-center space-x-4 relative">
            
            {/* Wave Effect */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <motion.div
                animate={{ scale: [2, 2], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute w-1/2 h-1/2 bg-orange-500 rounded-full"
              />
              {/* Toggle Button */}
              <button
                onClick={() => setIsLeftSidebarOpen(true)}
                className="relative bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-10 text-2xl"
              >
                ≡
              </button>
            </div>

            {/* Logo */}
            <img src={Logo} alt="Logo" className="h-8" />
            <span className="font-semibold text-lg text-[#7c4a00] tracking-widest">
              WEDDING <span className="text-[#b98b45] font-bold">MATRIMONY</span>
            </span>
          </div>

          {/* Center Menu */}
          <ul className="hidden md:flex space-x-6 text-[#5a3a00] font-medium">
            <li className="hover:text-[#b98b45] cursor-pointer">Explore ▾</li>
            <li className="hover:text-[#b98b45] cursor-pointer">All Pages ▾</li>
            <li className="hover:text-[#b98b45] cursor-pointer">Top Pages ▾</li>
            <li className="hover:text-[#b98b45] cursor-pointer">Plans</li>
            <li className="hover:text-[#b98b45] cursor-pointer">Register</li>
            <li className="hover:text-[#b98b45] cursor-pointer">Dashboard ▾</li>
          </ul>

          {/* Right: Profile Avatar */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setIsRightSidebarOpen(true)}
          >
            <img src={User} alt="User Avatar" className="w-8 h-8 rounded-full" />
            <div className="text-right leading-tight">
              <div className="text-xs text-gray-500">ADVISOR</div>
              <div className="text-sm font-semibold text-[#5a3a00]">Ashley emyy</div>
            </div>
          </div>

        </div>
      </nav>

      {/* Sidebars */}
      {isLeftSidebarOpen && <LeftSidebar onClose={() => setIsLeftSidebarOpen(false)} />}
      {isRightSidebarOpen && <RightSidebar onClose={() => setIsRightSidebarOpen(false)} />}
    </header>
  );
};

export default Navbar;

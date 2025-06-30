import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const RightSidebar = ({ onClose, isOpen }) => {
  const [isBlurred, setIsBlurred] = useState(false);

  // Handle the opening and closing of the sidebar
  const handleClose = () => {
    onClose();
    setIsBlurred(false);
  };

  const handleOpen = () => {
    setIsBlurred(true);
  };

  // Blur the background based on whether the sidebar is open
  React.useEffect(() => {
    if (isOpen) {
      handleOpen();
    } else {
      setIsBlurred(false);
    }
  }, [isOpen]);

  return (
    <>
      {/* Apply blur effect to the body */}
      <div
        className={`transition-all duration-500 ease-in-out ${isBlurred ? "filter blur-sm" : ""} h-screen w-full fixed top-0 left-0 z-40`}
      ></div>

      <AnimatePresence>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-80 h-full bg-gradient-to-br from-pink-100 via-white to-purple-100 shadow-2xl p-6 z-50 overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 left-4 text-pink-600 hover:rotate-90 transition-transform duration-300 text-3xl"
          >
            <IoMdClose />   
          </button>

          {/* Support Team Section */}
          <div className="flex flex-col items-center mt-10">
            <h3 className="text-lg text-black font-semibold mb-4">SUPPORT TEAM</h3>

            <div className="relative mb-4">
              <img
                src="https://images.pexels.com/photos/3771061/pexels-photo-3771061.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Ashley emyy"
                className="rounded-xl w-48 h-48 object-cover"
              />
            </div>

            <h4 className="font-semibold text-lg">Ashley emyy</h4>
            <p className="text-xs text-gray-500 mb-4">Senior personal advisor</p>

            <button className="px-4 py-2 bg-gray-700 text-white text-sm rounded hover:bg-gray-900 transition mb-6">
              Ask your doubts
            </button>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center mb-8">
              {[FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn, FaYoutube, FaInstagram].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="bg-gray-100 p-2 rounded-full text-gray-600 hover:text-pink-600 transition text-lg"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          {/* Latest News Section */}
          <div className="mb-8">
            <h3 className="text-xs text-gray-400 font-semibold mb-4">LATEST NEWS</h3>

            <div className="flex flex-col gap-4">
              {[1, 2].map((item) => (
                <div key={item} className="flex gap-4 items-center hover:bg-gray-100 p-2 rounded-lg transition cursor-pointer">
                  <img
                    src="https://images.pexels.com/photos/3020836/pexels-photo-3020836.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="News"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-semibold">Long established fact that a reader distracted</h4>
                    <p className="text-xs text-gray-400 mt-1">12 Dec 2023</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tell Us Your Needs Section */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              
            
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-4 text-center">
              <h2 className="text-white text-lg font-bold">Tell us your Needs</h2>
              <p className="text-white text-xs mt-1 mb-4">
                Tell us what kind of service you are looking for.
              </p>
              <button className="bg-blue-700 text-white px-4 py-2 rounded text-xs hover:bg-blue-800 transition">
                REGISTER FOR FREE
              </button>
            </div>
          </div>

        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default RightSidebar;

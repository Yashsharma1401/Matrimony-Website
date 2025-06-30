import React from 'react';
import Pic1 from "../assets/images/login-bg.png";

const FindYourMatch = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Inline styles using styled-jsx (if using Next.js) or insert in global CSS */}
      <style jsx>{`
        @keyframes movehor {
          0% {
            background-position-x: 0;
            background-position-y: -18px;
          }
          100% {
            background-position-x: -5487.35%;
            background-position-y: -18px;
          }
        }
        .fot-ban-inn .lhs:before {
          content: '';
          position: absolute;
          background: url(${Pic1});
          width: 100%;
          height: 62px;
          bottom: 0;
          left: 0;
          right: 0;
          background-size: 325px;
          animation: movehor 4000s linear infinite;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="fot-ban-inn relative">
          <div className="lhs relative text-center px-8 py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Find Your Perfect Match Now
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu fringilla.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="flex justify-center mb-10 space-x-4">
              <a
                href="sign-up.html"
                className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors duration-300"
              >
                Register Now
              </a>
              <a
                href="sign-up.html"
                className="border border-pink-600 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-600 hover:text-white transition-colors duration-300"
              >
                Help &amp; Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindYourMatch;

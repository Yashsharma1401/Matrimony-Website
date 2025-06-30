import React from 'react';

// Import user images from assets
import user1 from '../assets/images/user/1.jpg';
import user2 from '../assets/images/user/1.jpg';
import user3 from '../assets/images/user/5.jpg';
import user5 from '../assets/images/user/5.jpg';

const SuccessStories = () => {
  return (
    <div className="success-stories-section">
      <section>
        <div className="customer-reviews-container">
          <div className="container">
            <div className="section-title flex flex-col items-center text-center py-16">
              <p className="trusted-brand-text">Trusted Brand</p>
              <h2 className="section-heading">
                <span>
                  Trusted by <b className="font-bold">1500</b>+ Couples
                </span>
              </h2>
              <span className="leaf1"></span>
              <span className="title-animation"></span>
            </div>

            <div className="  ">
              <ul className="reviews-slider flex gap-4 no-scrollbar overflow-x-auto">
                <li className="review-item w-80 flex-none">
                  <div className="review-box bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-all duration-300">
                    <div className="review-image-wrapper relative h-32 w-32 mx-auto mb-4">
                      <img
                        src={user1}
                        alt="Customer 1"
                        loading="lazy"
                        className="review-image rounded-full absolute inset-0 object-cover h-full w-full"
                      />
                    </div>
                    <p className="review-text text-gray-700 text-center">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s.
                    </p>
                    <div className="reviewer-info mt-4 text-center">
                      <h5 className="reviewer-name font-semibold">Jack Danial</h5>
                      <span className="reviewer-location text-sm text-gray-500">New York</span>
                    </div>
                  </div>
                </li>
                <li className="review-item w-80 flex-none">
                  <div className="review-box bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-all duration-300">
                    <div className="review-image-wrapper relative h-32 w-32 mx-auto mb-4">
                      <img
                        src={user2}
                        alt="Customer 2"
                        loading="lazy"
                        className="review-image rounded-full absolute inset-0 object-cover h-full w-full"
                      />
                    </div>
                    <p className="review-text text-gray-700 text-center">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s.
                    </p>
                    <div className="reviewer-info mt-4 text-center">
                      <h5 className="reviewer-name font-semibold">Jack Danial</h5>
                      <span className="reviewer-location text-sm text-gray-500">New York</span>
                    </div>
                  </div>
                </li>
                <li className="review-item w-80 flex-none">
                  <div className="review-box bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-all duration-300">
                    <div className="review-image-wrapper relative h-32 w-32 mx-auto mb-4">
                      <img
                        src={user3}
                        alt="Customer 3"
                        loading="lazy"
                        className="review-image rounded-full absolute inset-0 object-cover h-full w-full"
                      />
                    </div>
                    <p className="review-text text-gray-700 text-center">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s.
                    </p>
                    <div className="reviewer-info mt-4 text-center">
                      <h5 className="reviewer-name font-semibold">Jack Danial</h5>
                      <span className="reviewer-location text-sm text-gray-500">New York</span>
                    </div>
                  </div>
                </li>
                <li className="review-item w-80 flex-none">
                  <div className="review-box bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-all duration-300">
                    <div className="review-image-wrapper relative h-32 w-32 mx-auto mb-4">
                      <img
                        src={user5}
                        alt="Customer 5"
                        loading="lazy"
                        className="review-image rounded-full absolute inset-0 object-cover h-full w-full"
                      />
                    </div>
                    <p className="review-text text-gray-700 text-center">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s.
                    </p>
                    <div className="reviewer-info mt-4 text-center">
                      <h5 className="reviewer-name font-semibold">Jack Danial</h5>
                      <span className="reviewer-location text-sm text-gray-500">New York</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="py-10 flex justify-center">
              <a
                href="#!"
                className="cta-button bg-black text-white text-base font-semibold py-3 px-8 rounded-md uppercase hover:bg-gray-800 transition-all duration-300"
              >
                More customer reviews
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;

import React from 'react';
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import Pic1 from '../assets/images/profiles/6.jpg';
import Pic2 from '../assets/images/profiles/7.jpg';
import Pic3 from '../assets/images/profiles/8.jpg';
import Pic4 from '../assets/images/profiles/9.jpg';



const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Matchmaker',
      image: Pic1,
      social: {
        facebook: '#',
        whatsapp: '#',
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'Relationship Expert',
      image: Pic2,
      social: {
        facebook: '#',
        whatsapp: '#',
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Michael Brown',
      role: 'Customer Support',
      image: Pic3,
      social: {
        facebook: '#',
        whatsapp: '#',
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Emily Davis',
      role: 'Profile Manager',
      image: Pic4,
      social: {
        facebook: '#',
        whatsapp: '#',
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-pink-600 font-semibold uppercase tracking-wide mb-2">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Our dedicated team of professionals is here to help you find your perfect match.
            With years of experience in matchmaking, we ensure the best possible matches for our members.
          </p>
        </div>

        {/* Grid of team members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-xl cursor-pointer"
            >
              {/* Member image with zoom effect on hover */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              {/* Overlay that appears on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-2xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {member.name}
                </h3>
                <p className="text-pink-400 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {member.role}
                </p>
                <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
  <a
    href={member.social.facebook}
    className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-20 transition-all duration-300 hover:bg-pink-600 hover:scale-110 hover:shadow-lg"
  >
    <FaFacebookF size={20} className="text-white" />
  </a>
  <a
    href={member.social.whatsapp}
    className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-20 transition-all duration-300 hover:bg-pink-600 hover:scale-110 hover:shadow-lg"
  >
    <FaWhatsapp size={20} className="text-white" />
  </a>
  <a
    href={member.social.linkedin}
    className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-20 transition-all duration-300 hover:bg-pink-600 hover:scale-110 hover:shadow-lg"
  >
    <FaLinkedinIn size={20} className="text-white" />
  </a>
  <a
    href={member.social.twitter}
    className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-20 transition-all duration-300 hover:bg-pink-600 hover:scale-110 hover:shadow-lg"
  >
    <FaTwitter size={20} className="text-white" />
  </a>
  <a
    href={member.social.instagram}
    className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-20 transition-all duration-300 hover:bg-pink-600 hover:scale-110 hover:shadow-lg"
  >
    <FaInstagram size={20} className="text-white" />
  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;

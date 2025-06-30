import React from 'react';
import Pic1 from '../assets/images/couples/1.jpg';
import Pic2 from '../assets/images/couples/2.jpg';
import Pic3 from '../assets/images/couples/4.jpg';
import Pic4 from '../assets/images/couples/11.jpg';


const RecentCouples = () => {
  const couples = [
    {
      groom: {
        name: 'John Smith',
        age: 28,
        profession: 'Software Engineer',
        image: Pic1
      },
      bride: {
        name: 'Sarah Johnson',
        age: 26,
        profession: 'Doctor',
        image: Pic1
      },
      date: 'March 15, 2024',
      city: 'New York'
    },
    {
      groom: {
        name: 'Michael Brown',
        age: 30,
        profession: 'Business Owner',
        image: Pic2
      },
      bride: {
        name: 'Emily Davis',
        age: 28,
        profession: 'Teacher',
        image: Pic2
      },
      date: 'March 10, 2024',
      city: 'Los Angeles'
    },
    {
      groom: {
        name: 'David Wilson',
        age: 32,
        profession: 'Architect',
        image: Pic3
      },
      bride: {
        name: 'Jessica Taylor',
        age: 29,
        profession: 'Marketing Manager',
        image: Pic3
      },
      date: 'March 5, 2024',
      city: 'Chicago'
    },
    {
      groom: {
        name: 'Alex Turner',
        age: 27,
        profession: 'Musician',
        image: Pic4
      },
      bride: {
        name: 'Lucy Gray',
        age: 25,
        profession: 'Designer',
        image: Pic4
      },
      date: 'March 1, 2024',
      city: 'San Francisco'
    }
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Recent Couples</p>
          <h2 className="text-3xl font-bold">Recently Matched Couples</h2>
        </div>

        {/* Responsive grid: 1 col on small screens, 2 col on md, 4 col on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {couples.map((couple, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              {/* Couple photo with zoom effect on hover */}
              <img
                src={couple.groom.image}
                alt={`${couple.groom.name} & ${couple.bride.name}`}
                className="w-full h-84 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay appears on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-center text-xl font-bold mb-2">
                  {couple.groom.name} & {couple.bride.name}
                </h3>
                <p className="text-white mb-4">{couple.city}</p>
                <button className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors duration-300">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentCouples;
 
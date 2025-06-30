import React from 'react';

const MasterManageContent = () => {
  const masterItems = [
    {
      title: "Manage Wedding Categories",
      description: "Add, edit, or remove categories to classify wedding types.",
    },
    {
      title: "Manage Venue Types",
      description: "Configure venue types for wedding ceremonies and receptions.",
    },
    {
      title: "Manage Customer Tiers",
      description: "Adjust membership levels and privileges for customers.",
    },
    {
      title: "Manage Service Providers",
      description: "Update and manage your trusted list of service providers.",
    },
    {
      title: "Manage Payment Methods",
      description: "Configure secure payment gateways and fee structures.",
    },
    {
      title: "Manage Notification Templates",
      description: "Edit and customize email or SMS notification templates.",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Master Management</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {masterItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{item.description}</p>
            <div>
              <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors duration-300 mr-2">
                Edit
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition-colors duration-300">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasterManageContent;

import React from 'react';

const ContentManage = () => {
  // Dummy content items for illustration
  const contentItems = [
    {
      id: 1,
      type: "Homepage Banner",
      title: "Welcome to Wedding Matrimony",
      updated: "15 Jan 2023",
    },
    {
      id: 2,
      type: "Success Story",
      title: "Alice & Bob's Dream Wedding",
      updated: "20 Feb 2023",
    },
    {
      id: 3,
      type: "Blog Post",
      title: "5 Tips for a Perfect Wedding Ceremony",
      updated: "01 Mar 2023",
    },
    {
      id: 4,
      type: "Testimonial",
      title: "What Our Couples Say",
      updated: "10 Mar 2023",
    },
    {
      id: 5,
      type: "FAQ",
      title: "Frequently Asked Questions",
      updated: "22 Feb 2023",
    },
  ];

  return (
    <div className="p-6">
      {/* Header Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Content Management</h2>

      {/* Add New Content Button */}
      <div className="mb-6">
        <button className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors duration-300">
          Add New Content
        </button>
      </div>

      {/* Content Items Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold text-sm">Type</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold text-sm">Title</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold text-sm">Last Updated</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contentItems.map((item) => (
              <tr key={item.id} className="border-t border-gray-200">
                <td className="px-4 py-2 text-gray-800">{item.type}</td>
                <td className="px-4 py-2 text-gray-800">{item.title}</td>
                <td className="px-4 py-2 text-gray-800">{item.updated}</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="text-blue-600 hover:underline text-sm">Edit</button>
                  <button className="text-red-600 hover:underline text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fallback Message for No Items */}
      {contentItems.length === 0 && (
        <p className="mt-6 text-center text-gray-500">
          No content items available.
        </p>
      )}
    </div>
  );
};

export default ContentManage;

import React, { useState } from 'react';

const UserMange = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dummy data representing user records
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Premium",
      registration: "12 Jan 2023",
      status: "Active",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      role: "Standard",
      registration: "05 Feb 2023",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Carol White",
      email: "carol@example.com",
      role: "Premium",
      registration: "18 Mar 2023",
      status: "Active",
    },
    {
      id: 4,
      name: "David Brown",
      email: "david@example.com",
      role: "Standard",
      registration: "25 Mar 2023",
      status: "Active",
    },
  ];

  // Filter users based on the search term (searches both name & email, case-insensitive)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
        <div className="mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-pink-500"
          />
        </div>
      </div>
      
      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold text-sm">Name</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold text-sm">Email</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold text-sm">Role</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold text-sm">Registration Date</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold text-sm">Status</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t border-gray-200">
                <td className="px-4 py-2 text-gray-800">{user.name}</td>
                <td className="px-4 py-2 text-gray-800">{user.email}</td>
                <td className="px-4 py-2 text-gray-800">{user.role}</td>
                <td className="px-4 py-2 text-gray-800">{user.registration}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button className="text-blue-600 hover:underline text-sm">Edit</button>
                  <button className="text-red-600 hover:underline text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Message Display if No Match */}
      {filteredUsers.length === 0 && (
        <p className="mt-6 text-center text-gray-500">
          No users match your search criteria.
        </p>
      )}
    </div>
  );
};

export default UserMange;

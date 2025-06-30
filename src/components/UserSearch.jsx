import React, { useState } from 'react';

const UserSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCaste, setSelectedCaste] = useState('All');
  const [selectedReligion, setSelectedReligion] = useState('All');
  const [selectedEducation, setSelectedEducation] = useState('All');
  const [results, setResults] = useState([]);

  // Dummy data for users including caste, religion, education
  const dummyUsers = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      status: "Active",
      caste: "Brahmin",
      religion: "Hindu",
      education: "Bachelor's",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      status: "Inactive",
      caste: "Kshatriya",
      religion: "Hindu",
      education: "Master's",
    },
    {
      id: 3,
      name: "Carol White",
      email: "carol@example.com",
      status: "Active",
      caste: "Brahmin",
      religion: "Christian",
      education: "Bachelor's",
    },
    {
      id: 4,
      name: "David Brown",
      email: "david@example.com",
      status: "Active",
      caste: "Vaishya",
      religion: "Hindu",
      education: "PhD",
    },
  ];

  // Options for filters
  const casteOptions = ["Caste", "Brahmin", "Kshatriya", "Vaishya", "Shudra"];
  const religionOptions = ["Religion", "Hindu", "Christian", "Muslim"];
  const educationOptions = ["Education", "Bachelor's", "Master's", "PhD"];

  // Handle search submission, filtering dummy data by search query, caste, religion, and education
  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = dummyUsers.filter((user) => {
      // Check name or email against search query
      const matchesQuery =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());

      // Check caste if not "All"
      const matchesCaste = selectedCaste === "All" || user.caste === selectedCaste;

      // Check religion if not "All"
      const matchesReligion = selectedReligion === "All" || user.religion === selectedReligion;

      // Check education if not "All"
      const matchesEducation = selectedEducation === "All" || user.education === selectedEducation;

      return matchesQuery && matchesCaste && matchesReligion && matchesEducation;
    });
    setResults(filtered);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Search User</h2>
      
      <form onSubmit={handleSearch} className="mb-6 space-y-4 max-w-xl mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name or email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-pink-500"
        />
        
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <select
            value={selectedCaste}
            onChange={(e) => setSelectedCaste(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-pink-500"
          >
            {casteOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          
          <select
            value={selectedReligion}
            onChange={(e) => setSelectedReligion(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-pink-500"
          >
            {religionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          
          <select
            value={selectedEducation}
            onChange={(e) => setSelectedEducation(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-pink-500"
          >
            {educationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            className="mt-4 bg-pink-600 text-white px-5 py-3 rounded-md hover:bg-pink-700 transition-colors duration-300"
          >
            Search
          </button>
        </div>
      </form>
      
      {results.length > 0 ? (
        <div className="space-y-4">
          {results.map((user) => (
            <div
              key={user.id}
              className="flex items-center p-4 bg-white border rounded-lg shadow-sm"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-xs text-gray-500">
                  Caste: {user.caste} • Religion: {user.religion} • Education: {user.education}
                </p>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user.status}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No users match your search criteria.</p>
      )}
    </div>
  );
};

export default UserSearch;

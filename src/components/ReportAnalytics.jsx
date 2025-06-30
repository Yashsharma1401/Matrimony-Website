import React from "react";

const ReportAnalytics = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User Management Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card for Generate User Report */}
        <div className="flex flex-col justify-between bg-white rounded-xl shadow border border-gray-200 p-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Generate User Report</h3>
            <p className="text-gray-600 text-sm text-center mb-4">
              Get a detailed analysis of user registrations, activity, and engagement.
            </p>
          </div>
          <button className="w-full px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors duration-300">
            Generate
          </button>
        </div>

        {/* Card for Generate Match Report */}
        <div className="flex flex-col justify-between bg-white rounded-xl shadow border border-gray-200 p-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Generate Match Report</h3>
            <p className="text-gray-600 text-sm text-center mb-4">
              View insights on matches and approved profiles to improve pairing accuracy.
            </p>
          </div>
          <button className="w-full px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors duration-300">
            Generate
          </button>
        </div>

        {/* Card for Generate Revenue Report */}
        <div className="flex flex-col justify-between bg-white rounded-xl shadow border border-gray-200 p-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Generate Revenue Report</h3>
            <p className="text-gray-600 text-sm text-center mb-4">
              Analyze revenue streams, commissions, and overall financial performance.
            </p>
          </div>
          <button className="w-full px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors duration-300">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportAnalytics;

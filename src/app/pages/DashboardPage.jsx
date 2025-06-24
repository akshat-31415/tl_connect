import React, { useState, useEffect } from 'react';

const DashboardPage = ({ userRole }) => {
  return (
    <div className="bg-linear-to-r from-cyan-200 via-blue-400 to-indigo-600 flex-1 p-8 bg-gray-50 font-inter">
      <h2 className="flex justify-center text-4xl font-extrabold text-gray-800 mb-6">Dashboard</h2>
      <p className="flex justify-center text-lg text-gray-700 mb-8">Welcome, <span className="font-semibold text-indigo-600">{userRole}</span>! Here's a summary of your activities:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Widget 1: Upcoming Workshops */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Upcoming Workshops</h3>
          <p className="text-gray-600">No upcoming workshops for {userRole} today.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">View All</button>
        </div>

        {/* Widget 2: Assigned Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Assigned Tasks</h3>
          <p className="text-gray-600">You have 3 pending tasks.</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">Go to Tasks</button>
        </div>

        {/* Widget 3: Class Join Links */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Class Join Links</h3>
          <p className="text-gray-600">No active class links.</p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors">View Schedule</button>
        </div>

        {/* Widget 4: Recent Announcements */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Recent Announcements</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Meeting postponed (Info)</li>
            <li>New project initiated (Important)</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors">View All</button>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage
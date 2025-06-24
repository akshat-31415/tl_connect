import React, { useState, useEffect } from 'react';

const Navbar = ({ userRole, currentPage, onNavigate, onLogout }) => {
  if (!userRole) return null; // Don't show Navbar if not logged in

  const navItems = [
    { name: 'Dashboard', path: 'dashboard' },
    { name: 'Workshops', path: 'workshops' },
    { name: 'Summer School', path: 'summer-school' },
    { name: 'Tasks', path: 'tasks' },
    { name: 'Members', path: 'members' },
    { name: 'Announcements', path: 'announcements' },
  ];

  return (
    <nav className="bg-indigo-800 p-4 shadow-lg font-inter">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-white text-2xl font-bold mb-4 md:mb-0">TL Connect</div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => onNavigate(item.path)}
              className={`text-white px-4 py-2 rounded-md transition-colors duration-200
                ${currentPage === item.path ? 'bg-indigo-600 font-semibold' : 'hover:bg-indigo-700'}`}
            >
              {item.name}
            </button>
          ))}
          <span className="text-white text-sm opacity-80 md:ml-4">Role: {userRole}</span>
          <button
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
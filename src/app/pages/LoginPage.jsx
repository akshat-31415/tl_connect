import React, { useState, useEffect } from 'react';

const LoginPage = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleLogin = () => {
    if (selectedRole) {
      onLogin(selectedRole);
    } else {
      // In a real app, you might show a validation message
      console.log('Please select a role.');
    }
  };

  return (
    <div className="bg-linear-to-r from-cyan-200 via-blue-400 to-indigo-600 min-h-screen flex items-center justify-center bg-gray-100 p-4 font-inter">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">TL Connect Login</h2>
        <div className="mb-6">
          <label htmlFor="role-select" className="block text-gray-700 text-sm font-medium mb-2">
            Select Your Role:
          </label>
          <select
            id="role-select"
            className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="" disabled>Choose a role</option>
            <option value="Core">Core</option>
            <option value="Lead">Lead</option>
            <option value="Member">Member</option>
            <option value="Student">Student</option>
          </select>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Login to Dashboard
        </button>
      </div>
    </div>
  );
};

export default LoginPage
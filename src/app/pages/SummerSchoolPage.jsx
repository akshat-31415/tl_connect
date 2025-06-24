import React, { useState, useEffect } from 'react';
import lectures from '../data/SummerSchoolData';

const SummerSchoolPage = () => {
  return (
    <div className="bg-linear-to-r from-cyan-200 via-blue-400 to-indigo-600 flex-1 p-8 bg-gray-50 font-inter">
      <h2 className="flex justify-center text-4xl font-extrabold text-gray-800 mb-6">Summer School Class Tracker</h2>

      <div className="bg-blue-100 p-6 rounded-lg shadow-md border border-gray-200 overflow-x-auto">
        <table className="bg-blue-100 min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-200">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lecture Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Google Meet
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assignment
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Deadline
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {lectures.map((lecture) => (
              <tr key={lecture.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(lecture.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {lecture.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline">
                  <a href={lecture.meetLink} target="_blank" rel="noopener noreferrer">Join Meet</a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline">
                  <a href={lecture.assignment.link} target="_blank" rel="noopener noreferrer">
                    {lecture.assignment.title}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {new Date(lecture.assignment.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default SummerSchoolPage
import React, { useState, useEffect } from 'react';
import allWorkshops from '../data/WorkshopsData';

const WorkshopCard = ({ workshop }) => {
  const isUpcoming = new Date(workshop.date) >= new Date();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{workshop.title}</h3>
        <p className="text-sm text-indigo-600 font-medium mb-1">Domain: {workshop.domain}</p>
        <p className="text-gray-600 mb-4">Date: {new Date(workshop.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
      <button
        className={`w-full py-2 px-4 rounded-md font-semibold transition-colors duration-200
          ${isUpcoming ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
      >
        {isUpcoming ? 'Register' : 'View Details'}
      </button>
    </div>
  );
};

// Workshops Page
const WorkshopsPage = () => {

  const [filterType, setFilterType] = useState('all'); // 'all', 'upcoming', 'past'
  const [filterDomain, setFilterDomain] = useState('all'); // 'all' or specific domain

  const uniqueDomains = ['all', ...new Set(allWorkshops.map(w => w.domain))];

  const filteredWorkshops = allWorkshops.filter(workshop => {
    const workshopDate = new Date(workshop.date);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Normalize current date for comparison

    const matchesType =
      filterType === 'all' ||
      (filterType === 'upcoming' && workshopDate >= currentDate) ||
      (filterType === 'past' && workshopDate < currentDate);

    const matchesDomain =
      filterDomain === 'all' || workshop.domain === filterDomain;

    return matchesType && matchesDomain;
  }).sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date

  return (
    <div className="bg-linear-to-r from-cyan-200 via-blue-400 to-indigo-600 flex flex-col justify-center items-center flex-1 p-8 bg-gray-50 font-inter">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Workshops</h2>

      <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0 md:space-x-4">
        {/* Type Filter */}
        <div className="flex space-x-2 w-full md:w-auto">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${filterType === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilterType('upcoming')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${filterType === 'upcoming' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilterType('past')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${filterType === 'past' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            Past
          </button>
        </div>

        {/* Domain Filter */}
        <div className="w-full md:w-auto">
          <select
            value={filterDomain}
            onChange={(e) => setFilterDomain(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
          >
            {uniqueDomains.map(domain => (
              <option key={domain} value={domain}>
                {domain === 'all' ? 'All Domains' : domain}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredWorkshops.length > 0 ? (
          filteredWorkshops.map(workshop => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))
        ) : (
          <p className="text-gray-600 text-lg col-span-full text-center">No workshops found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};
export default WorkshopsPage
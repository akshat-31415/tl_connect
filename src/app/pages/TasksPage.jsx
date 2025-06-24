import React, { useState, useEffect } from 'react';
import tasksData from '../data/TasksData';

const TaskCard = ({ task }) => {
  const getCardBackgroundColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-red-100'; 
      case 'In Progress':
        return 'bg-yellow-100'; 
      case 'Done':
        return 'bg-green-100';
      default:
        return 'bg-white';
    }
  };

  // Kept separate for the status tag itself
  const getStatusTagColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-red-100 text-red-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Done':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between ${getCardBackgroundColor(task.status)}`}>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{task.title}</h3>
        <p className="text-sm text-indigo-600 font-medium mb-1">Domain: {task.domain}</p>
        <p className="text-gray-600 mb-2">Assigned Date: {new Date(task.assignmentDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusTagColor(task.status)}`}>
          Status: {task.status}
        </span>
      </div>
      <button className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition-colors">
        View Details
      </button>
    </div>
  );
};

const TasksPage = ({ userRole }) => { // userRole is passed to filter tasks if needed
  const [filterDomain, setFilterDomain] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const uniqueDomains = ['all', ...new Set(tasksData.map(task => task.domain))];
  const uniqueStatuses = ['all', ...new Set(tasksData.map(task => task.status))];

  // Filter tasks based on selected domain and status
  const filteredTasks = tasksData.filter(task => {
    const matchesDomain = filterDomain === 'all' || task.domain === filterDomain;
    const matchesStatus = filterStatus === 'all' || task.status === filterStatus;

    const matchesRole = userRole === 'Core' || task.assignedTo === userRole;
    return matchesDomain && matchesStatus; // && matchesRole;
  }).sort((a, b) => new Date(b.assignmentDate) - new Date(a.assignmentDate)); // Sort by most recent assignment date

  // Group tasks by domain for display
  const tasksGroupedByDomain = filteredTasks.reduce((acc, task) => {
    if (!acc[task.domain]) {
      acc[task.domain] = [];
    }
    acc[task.domain].push(task);
    return acc;
  }, {});

  return (
    <div className="flex-1 p-8 bg-gray-50 font-inter">
      <h2 className="flex justify-center text-4xl font-extrabold text-gray-800 mb-6">Tasks</h2>

      <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0 md:space-x-4">
        {/* Domain Filter */}
        <div className="flex justify-center items-center w-full md:w-auto flex-1">
          <label htmlFor="task-domain-select" className="sr-only">Filter by Domain</label>
          <select
            id="task-domain-select"
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

        {/* Status Filter */}
        <div className="w-full md:w-auto flex-1">
          <label htmlFor="task-status-select" className="sr-only">Filter by Status</label>
          <select
            id="task-status-select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
          >
            {uniqueStatuses.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'All Statuses' : status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {Object.keys(tasksGroupedByDomain).length > 0 ? (
        Object.entries(tasksGroupedByDomain).map(([domain, tasks]) => (
          <div key={domain} className="mb-8">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">{domain}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tasks.map(task => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600 text-lg text-center">No tasks found matching your criteria.</p>
      )}
    </div>
  );
};
export default TasksPage
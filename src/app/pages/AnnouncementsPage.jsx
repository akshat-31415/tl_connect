import React, { useState, useEffect } from 'react';
import announcementsData from '../data/AnnouncementsData';
const AnnouncementCard = ({ announcement }) => {
  const getTagColors = (tag) => {
    switch (tag) {
      case 'Important':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'Info':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Critical':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className={` p-6 rounded-lg shadow-md border ${getTagColors(announcement.tag)}`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-gray-900">{announcement.title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColors(announcement.tag)}`}>
          {announcement.tag}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-3">
        {new Date(announcement.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
      <p className="text-gray-700">{announcement.content}</p>
    </div>
  );
};

const AnnouncementsPage = () => {
  // Sort announcements by date, most recent first
  const sortedAnnouncements = [...announcementsData].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="bg-linear-to-r from-cyan-200 via-blue-400 to-indigo-600 flex-1 p-8 bg-gray-50 font-inter">
      <h2 className="flex justify-center text-4xl font-extrabold text-gray-800 mb-6">Announcements</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedAnnouncements.length > 0 ? (
          sortedAnnouncements.map(announcement => (
            <AnnouncementCard key={announcement.id} announcement={announcement} />
          ))
        ) : (
          <p className="text-gray-600 text-lg text-center col-span-full">No announcements available at the moment.</p>
        )}
      </div>
    </div>
  );
};
export default AnnouncementsPage

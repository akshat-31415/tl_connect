import React, { useState, useEffect } from 'react';
import membersData
 from '../data/MembersData';
const MemberCard = ({ member }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
        <p className="text-sm text-indigo-600 font-medium mb-1">Role: {member.role}</p>
        <p className="text-gray-600 mb-4">Domain: {member.domain}</p>
      </div>
      <button className="mt-4 w-full py-2 px-4 bg-purple-500 text-white rounded-md font-semibold hover:bg-purple-600 transition-colors">
        Assign Task (Placeholder)
      </button>
    </div>
  );
};

const MembersPage = () => {
    // Group members by domain
    const membersGroupedByDomain = membersData.reduce((acc, member) => {
        if (!acc[member.domain]) {
            acc[member.domain] = [];
        }
        acc[member.domain].push(member);
        return acc;
    }, {});

    return (
        <div className="bg-linear-to-r from-cyan-200 via-blue-400 to-indigo-600 flex-1 p-8 bg-gray-50 font-inter">
            <h2 className="flex justify-center text-4xl font-extrabold text-gray-800 mb-6">Members</h2>

            {Object.keys(membersGroupedByDomain).length > 0 ? (
                Object.entries(membersGroupedByDomain).map(([domain, members]) => (
                    <div key={domain} className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-700 mb-4">{domain}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {members.map(member => (
                                <MemberCard key={member.id} member={member} />
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-600 text-lg text-center">No lab members found.</p>
            )}
        </div>
    );
};
export default MembersPage
"use client";

import React from 'react';

interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
}

interface LeadItemProps {
  lead: Lead;
}

const LeadItem: React.FC<LeadItemProps> = ({ lead }) => {
  const handleStatusChange = (newStatus: string) => {
    console.log(`Lead ${lead.name} marked as ${newStatus}`);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h3 className="font-bold text-lg">{lead.name}</h3>
      <p className="text-gray-700">{lead.email}</p>
      <p className="text-gray-700">{lead.phone}</p>
      <p className="text-gray-500">Status: {lead.status}</p>
      <div className="mt-3 flex space-x-3">
        <a href={`tel:${lead.phone}`} className="text-blue-600 hover:underline">Call</a>
        <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">Email</a>
        <button onClick={() => handleStatusChange('Sold')} className="text-green-600 hover:underline">
          Mark as Sold
        </button>
        <button onClick={() => handleStatusChange('Not Sold')} className="text-red-600 hover:underline">
          Mark as Not Sold
        </button>
      </div>
    </div>
  );
};

export default LeadItem;

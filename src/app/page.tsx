import React from 'react';
import LeadList from '@/components/LeadList';

const Home: React.FC = () => {
  // Example leads data to be passed to the LeadList component
  const leads = [
    { id: 1, name: 'Adarsh', email: 'adarsh@yahoo.com', phone: '795128487', status: 'Not Sold' },
    { id: 2, name: 'Ashish', email: 'ashish@yahoo.com', phone: '795812526', status: 'Sold' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mini Sales CRM</h1>
      <LeadList leads={leads} />
    </div>
  );
};

export default Home;

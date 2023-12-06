import React from 'react';
import BaseLayout from './BaseLayout';

const PrivateLayout: React.FC<ReactChildComponent> = ({ children, title }) => {
  return (
    <BaseLayout title={title}>
      {/* Sidemenu component */}
      <div className='flex flex-col h-screen bg-gray-900 text-white p-4 gap-4 w-64'>
        <span>Dashboard (Selected)</span>
        <span>Schedule</span>
        <span>Reports</span>
      </div>
      <div className='flex-col'>{children}</div>
    </BaseLayout>
  );
};

export default PrivateLayout;

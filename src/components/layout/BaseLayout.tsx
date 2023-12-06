import React from 'react';

const BaseLayout: React.FC<ReactChildComponent> = ({ children }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center pr-4'>
        <h1 className='bg-gray-900 text-2xl uppercase text-white p-4 w-64'>
          Recrutr HRMS
        </h1>
        {/* Instead of 'Pro' we need have circle having the user image i.e profile image from the logged in user */}
        <span className='rounded-full cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
            />
          </svg>
        </span>
      </div>
      <div className='flex flex-row gap-3'>{children}</div>
    </div>
  );
};

export default BaseLayout;

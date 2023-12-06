// TODO:
// Add a loading spinner when the login button is clicked
// Add private routes
// Route authentication
// Layout component

import React from 'react';
import { LoginForm } from '../forms/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className='grid grid-cols-1 h-screen w-full'>
      {/* Your logo will go here */}
      <div className='bg-gray-800 flex flex-col justify-center'>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center bg-gray-800 font-mono'>
      <h1 className='text-9xl font-extrabold text-white'>404</h1>
      <p className='mt-4 text-lg text-gray-300'>
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate(-1)}
        className='mt-6 inline-block px-6 py-2 bg-[#FF6A3D] text-white font-semibold rounded hover:bg-[#FF8A5A] transition duration-300'
      >
        Go Back
      </button>
      <p className='mt-2 text-sm text-gray-400'>
        Or <a href="/" className="text-blue-400 hover:underline">return to the homepage</a>.
      </p>
    </div>
  );
};

export default NotFound;

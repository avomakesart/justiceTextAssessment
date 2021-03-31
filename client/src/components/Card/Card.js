import React from 'react';

export const Card = ({ children }) => {
  return (
    <div className='max-w-full px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800'>
      {children}
    </div>
  );
};

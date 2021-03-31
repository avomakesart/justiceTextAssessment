import React, { useState } from 'react';
import { SearchIcon } from '../../assets/icons/SearchIcon';

export const Input = ({ type, placeholder, value, onChange, hasIcon }) => {
  const [showIcon] = useState(hasIcon);

  return (
    <div className='relative'>
      {showIcon && <SearchIcon />}

      <input
        type={type}
        className={`w-full py-3 pl-${
          showIcon ? '10' : '4'
        } pr-4 text-black transition duration-500 ease-in-out transform bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-500 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

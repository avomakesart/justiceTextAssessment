import React from 'react';

export const Header = ({ children, title }) => {
  return (
    <header className='text-gray-600 body-font border-gray-200 border-b'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a
          href='/'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <img
            className='w-10 h-10 text-white p-2 border border-black bg-transparent rounded'
            src='https://miro.medium.com/max/3150/1*SGHZCg-jkIDpMUZkdaX2Vw.png'
            alt='justice text'
          />

          <span className='ml-3 text-xl'> {title}</span>
        </a>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
          {children}
        </nav>
      </div>
    </header>
  );
};

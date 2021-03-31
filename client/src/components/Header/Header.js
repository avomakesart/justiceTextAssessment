import React from 'react';

export const Header = ({ children, title }) => {
  return (
    <section className='text-gray-700 body-font'>
      <div className='container px-8 mx-auto pt-16 lg:px-4'>
        <div className='flex flex-col w-full mx-auto mb-12 text-left lg:w-2/3 lg:text-center'>
          <h1 className='mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font'>
            {title}
          </h1>
        </div>
        {children}
      </div>
    </section>
  );
};

import React from 'react';
import ReactPaginate from 'react-paginate';

export const Pagination = ({ pageCount, handlePageChange }) => {
  return (
    <ReactPaginate
      previousLabel={'Previous'}
      nextLabel={'Next'}
      breakLabel={'...'}
      pageCount={pageCount}
      onPageChange={handlePageChange}
      pageRangeDisplayed={5}
      containerClassName={
        'bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'
      }
      previousLinkClassName={
        'relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500'
      }
      nextLinkClassName={
        'ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500'
      }
      activeClassName={
        'bg-gray-500 text-white rounded-lg border-t border-gray-200 px-4 py-2'
      }
    />
  );
};

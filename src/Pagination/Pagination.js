import React from 'react';
// import { useSelector } from 'react-redux';

export default function Pagination() {
  const handlePreviousClick = () => {
    console.log('handlePreviousClick');
  };

  const handleNextClick = () => {
    console.log('handleNextClick');
  };

  return (
    <div className="pagination">
      <button type="button" onClick={handlePreviousClick}>
        Previous
      </button>
      <p>2</p>
      <button type="button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
}

/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, previousPage } from '../../redux/actions/settings';
import { MINIMUM_PAGE } from '../../services/constants';

export default function Pagination() {
  const { currentpage, totalpages } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handlePreviousClick = () => {
    dispatch(previousPage(currentpage));
    console.log(currentpage);
  };

  const handleNextClick = () => {
    dispatch(nextPage(currentpage));
    console.log(currentpage);
  };

  return (
    <div className="pagination">
      <button
        type="button"
        className="pagination__button"
        id="prevButton"
        onClick={handlePreviousClick}
      >
        Previous
      </button>
      <p className="pagination__currentpage">{currentpage}</p>
      <button
        type="button"
        className="pagination__button"
        id="nextButton"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
}

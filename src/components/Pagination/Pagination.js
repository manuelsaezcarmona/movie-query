/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, previousPage } from '../../redux/actions/settings';
import { MINIMUM_PAGE } from '../../services/constants';

export default function Pagination() {
  const { currentpage } = useSelector((state) => state.settings);
  const { totalpages } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const handlePreviousClick = () => {
    dispatch(previousPage(currentpage));
  };

  const handleNextClick = () => {
    dispatch(nextPage(currentpage));
  };
  const isDisabled = (threshold) => threshold === currentpage;

  return (
    <div className="pagination">
      <button
        type="button"
        className="pagination__button"
        id="prevButton"
        onClick={handlePreviousClick}
        disabled={isDisabled(MINIMUM_PAGE)}
      >
        Previous
      </button>
      <p className="pagination__currentpage">
        {currentpage} / {totalpages}
      </p>
      <button
        type="button"
        className="pagination__button"
        id="nextButton"
        onClick={handleNextClick}
        disabled={isDisabled(totalpages)}
      >
        Next
      </button>
    </div>
  );
}

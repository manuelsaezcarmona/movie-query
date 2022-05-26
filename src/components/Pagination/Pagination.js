/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, previousPage } from '../../redux/actions/settings';
import { MINIMUM_PAGE } from '../../services/constants';
import styles from './styles.module.css';

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

  const getButtonClassName = (disabled) => {
    const className = disabled
      ? `${styles.pagination__button} ${styles['pagination__button--disabled']}`
      : `${styles.pagination__button}`;
    return className;
  };

  const prevDisabled = isDisabled(MINIMUM_PAGE);
  const nextDisabled = isDisabled(totalpages);

  const prevButtonClassName = getButtonClassName(prevDisabled);
  const nextButtonClassName = getButtonClassName(nextDisabled);

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        className={prevButtonClassName}
        id="prevButton"
        onClick={handlePreviousClick}
        disabled={prevDisabled}
      >
        Previous
      </button>
      <p className={styles.pagination__currentpage}>
        {currentpage} / {totalpages}
      </p>
      <button
        type="button"
        className={nextButtonClassName}
        id="nextButton"
        onClick={handleNextClick}
        disabled={nextDisabled}
      >
        Next
      </button>
    </div>
  );
}

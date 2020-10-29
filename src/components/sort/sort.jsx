import React from "react";
import PropTypes from "prop-types";
import {SortType} from "../../const";
import {OffersType} from "../../types";

const sortes = [SortType.POPULAR, SortType.PRICE_TO_HIGH, SortType.PRICE_TO_LOW, SortType.TOP_RATED];

const Sort = ({activeSortType, onClickSort}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex ="0">
      &nbsp; {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sortes.map((sort) => {
          return (
            <li
              key={sort}
              className={`places__option ${activeSortType === sort ? `places__option--active` : ``}`}
              tabIndex ="0"
              data-sort-type={sort}
              onClick={(e) => onClickSort(e.target.dataset.sortType)}
            >
              {sort}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

Sort.propTypes = {
  offers: OffersType,
  onClickSort: PropTypes.func.isRequired,
  activeSortType: PropTypes.string.isRequired,
};

export default Sort;

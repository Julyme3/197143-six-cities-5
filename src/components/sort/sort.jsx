import React, {memo} from "react";
import PropTypes from "prop-types";
import {SortType} from "../../const";

const sortes = Object.values(SortType);

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
  onClickSort: PropTypes.func.isRequired,
  activeSortType: PropTypes.string.isRequired,
};

export {Sort};
export default memo(Sort);

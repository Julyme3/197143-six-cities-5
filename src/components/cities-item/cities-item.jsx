import React, {memo} from "react";
import PropTypes from "prop-types";

const CitiesItem = ({city, activeCity, onClickHandler}) => {
  return (
    <li
      onClick={(e) => {
        e.preventDefault();
        onClickHandler(e.currentTarget.dataset.name);
      }}
      className="locations__item"
      data-name={city}
    >
      <a className={`locations__item-link tabs__item ${city === activeCity ? `tabs__item--active` : ``}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

CitiesItem.propTypes = {
  city: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};

export {CitiesItem};
export default memo(CitiesItem);

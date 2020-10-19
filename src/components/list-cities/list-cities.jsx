import React from "react";
import PropTypes from "prop-types";
import {CitiesType} from "../../types";

const ListCities = (props) => {
  const {cities, onClickHandler} = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.length && cities.map((city) => {
          return (
            <li
              onClick={(e) => {
                e.preventDefault();
                onClickHandler(e.currentTarget.dataset.name);
              }}
              key={city}
              className="locations__item"
              data-name={city}
            >
              <a className="locations__item-link tabs__item" href="#">
                <span>{city}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

ListCities.propTypes = {
  cities: CitiesType,
  onClickHandler: PropTypes.func.isRequired,
};

export default ListCities;

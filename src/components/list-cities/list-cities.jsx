import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setSelectedCityAction} from "../../store/actions";
import {CitiesType} from "../../types";
import CitiesItem from "../cities-item/cities-item";

const ListCities = (props) => {
  const {cities, activeCity, setSelectedCity} = props;

  const handleCityClick = (selectedCity) => {
    setSelectedCity(selectedCity);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.length && cities.map((city) => {
          return (
            <CitiesItem
              key={city}
              city={city}
              activeCity={activeCity}
              onClickHandler={handleCityClick}
            />
          );
        })}
      </ul>
    </section>
  );
};

ListCities.propTypes = {
  cities: CitiesType,
  activeCity: PropTypes.string.isRequired,
  setSelectedCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.PROCESS.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedCity(selectedCity) {
    dispatch(setSelectedCityAction(selectedCity));
  },
});

export {ListCities};

export default connect(mapStateToProps, mapDispatchToProps)(ListCities);

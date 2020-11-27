import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setSelectedCityAction} from "../../store/actions";
import {CitiesType} from "../../types";
import CitiesItem from "../cities-item/cities-item";
import {Cities} from "../../const";

class ListCities extends PureComponent {
  constructor(props) {
    super(props);

    this.handleCityClick = this.handleCityClick.bind(this);
  }

  componentWillUnmount() {
    const {setSelectedCity} = this.props;
    setSelectedCity(Cities[0]);
  }

  handleCityClick(selectedCity) {
    const {setSelectedCity} = this.props;
    setSelectedCity(selectedCity);
  }

  render() {
    const {cities, activeCity} = this.props;
    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.length && cities.map((city) => {
            return (
              <CitiesItem
                key={city}
                city={city}
                activeCity={activeCity}
                onClickHandler={this.handleCityClick}
              />
            );
          }) || null}
        </ul>
      </section>
    );
  }
}

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

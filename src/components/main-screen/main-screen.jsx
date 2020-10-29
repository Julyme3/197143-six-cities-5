import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/actions";
import {OffersType} from "../../types";
import cities from "../../mocks/cities";
import Header from "../header/header";
import OfferListMain from "../offer-list-main/offer-list-main";
import Map from "../map/map";
import ListCities from "../list-cities/list-cities";
import Sort from "../sort/sort";
import {sortOffers, getOffersByCity} from "../../offers";
import {SortType} from "../../const";

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCardCoords: [],
      activeSortType: SortType.POPULAR,
    };
    this.handleMouseEnterCard = this.handleMouseEnterCard.bind(this);
    this.handleCityClick = this.handleCityClick.bind(this);
    this.handleSortClick = this.handleSortClick.bind(this);
    this.handleMouseLeaveCard = this.handleMouseLeaveCard.bind(this);
  }

  handleCityClick(selectedCity) {
    this.props.setSelectedCity(selectedCity);

    const offersByCity = getOffersByCity(this.props.defaultOffers, selectedCity);

    if (this.state.activeSortType !== SortType.POPULAR) {
      this.props.setOffers(this.getSortedOffers(offersByCity, this.state.activeSortType));
      return;
    }
    this.props.setOffers(offersByCity);
  }

  handleSortClick(sort) {
    this.props.setOffers(this.getSortedOffers(this.props.offers, sort));
    this.setState({
      activeSortType: sort,
    });
  }

  handleMouseEnterCard(activeCardCoords) {
    this.setState({
      activeCardCoords
    });
  }

  handleMouseLeaveCard() {
    this.setState({
      activeCardCoords: [],
    });
  }

  getSortedOffers(initOffers, sort) {
    let defaultOffersByCity;
    if (sort === SortType.POPULAR) {
      defaultOffersByCity = getOffersByCity(this.props.defaultOffers, this.props.city);
    }
    return sortOffers(sort, initOffers, defaultOffersByCity);
  }

  render() {
    const {offers, city} = this.props;

    return (
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <ListCities
              cities={cities}
              onClickHandler={this.handleCityClick}
            />
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city}</b>
                <Sort
                  offers={offers}
                  onClickSort={this.handleSortClick}
                  activeSortType={this.state.activeSortType}
                />
                <OfferListMain
                  offers={offers}
                  onMouseEnterCard={this.handleMouseEnterCard}
                  onMouseLeaveCard={this.handleMouseLeaveCard}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    offers={offers}
                    width={`512px`}
                    height={`752px`}
                    activeCardCoords={this.state.activeCardCoords}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

MainPage.propTypes = {
  offers: OffersType,
  defaultOffers: OffersType,
  city: PropTypes.string.isRequired,
  setOffers: PropTypes.func.isRequired,
  setSelectedCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
  defaultOffers: state.defaultOffers,
});

const mapDispatchToProps = (dispatch) => ({
  setOffers(selectedCity) {
    dispatch(ActionCreator.setOffersAction(selectedCity));
  },
  setSelectedCity(selectedCity) {
    dispatch(ActionCreator.setSelectedCityAction(selectedCity));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

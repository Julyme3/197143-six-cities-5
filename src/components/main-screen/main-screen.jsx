import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setOffersAction} from "../../store/actions";
import {OffersType} from "../../types";
import cities from "../../mocks/cities";
import OfferListMain from "../offer-list-main/offer-list-main";
import Map from "../map/map";
import ListCities from "../list-cities/list-cities";
import Sort from "../sort/sort";
import {sortOffers, getOffersByCity} from "../../offers";
import {SortType} from "../../const";
import MainLayout from "../../layouts/main-layout/main-layout";
import MainScreenEmpty from "../main-screen-empty/main-screen-empty";

const MainPage = (props) => {
  const [activeSortType, setSortType] = useState(SortType.POPULAR);
  const {offers, activeCity, defaultOffers} = props;
  const defaultOffersByCity = getOffersByCity(defaultOffers, activeCity);
  const sortedOffers = sortOffers(activeSortType, defaultOffersByCity);

  return (
    <MainLayout
      className="page--gray page--main"
      classNameWrap={`page__main--index ${offers.length ? `` : `page__main--index-empty`}`}
    >
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <ListCities
          cities={cities}
        />
      </div>
      <div className="cities">
        {offers.length &&
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity}</b>
              <Sort
                offers={offers}
                onClickSort={(sort) => setSortType(sort)}
                activeSortType={activeSortType}
              />
              <OfferListMain
                offers={sortedOffers}
                onChangeActiveOffer={props.onChangeActiveItem}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={offers}
                  width={`512px`}
                  height={`752px`}
                  activeCardId={props.activeItem}
                />
              </section>
            </div>
          </div>
          ||
          <MainScreenEmpty activeCity={activeCity} />}
      </div>
    </MainLayout>
  );
};

MainPage.propTypes = {
  offers: OffersType,
  defaultOffers: OffersType,
  setOffers: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
  onChangeActiveItem: PropTypes.func.isRequired,
  activeItem: PropTypes.any,
};

const mapStateToProps = (state) => ({
  offers: state.DATA.offers,
  defaultOffers: state.DATA.defaultOffers,
  activeCity: state.PROCESS.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  setOffers(selectedCity) {
    dispatch(setOffersAction(selectedCity));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

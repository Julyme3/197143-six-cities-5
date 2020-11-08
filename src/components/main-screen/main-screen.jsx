import React, {useState, useMemo} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {OffersType} from "../../types";
import {getOffersSelector} from "../../store/reducers/offer-data/selectors";
import {getActiveCitySelector} from "../../store/reducers/process/selectors";
import OfferListMain from "../offer-list-main/offer-list-main";
import Map from "../map/map";
import ListCities from "../list-cities/list-cities";
import Sort from "../sort/sort";
import {sortOffers} from "../../offers";
import {SortType, Cities} from "../../const";
import MainLayout from "../../layouts/main-layout/main-layout";
import MainScreenEmpty from "../main-screen-empty/main-screen-empty";

const MainPage = (props) => {
  const [activeSortType, setSortType] = useState(SortType.POPULAR);
  const {offers, activeCity} = props;
  const sortedOffers = useMemo(() => sortOffers(activeSortType, offers), [activeSortType, offers]);

  return (
    <MainLayout
      className="page--gray page--main"
      classNameWrap={`page__main--index ${offers.length ? `` : `page__main--index-empty`}`}
    >
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <ListCities
          cities={Cities}
        />
      </div>
      <div className="cities">
        {offers.length ?
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
                  cityCoords={offers[0].city.location}
                  zoom={offers[0].city.zoom}
                  width={`512px`}
                  height={`752px`}
                  activeCardId={props.activeItem}
                />
              </section>
            </div>
          </div>
          :
          <MainScreenEmpty activeCity={activeCity} />}
      </div>
    </MainLayout>
  );
};

MainPage.propTypes = {
  offers: OffersType,
  activeCity: PropTypes.string.isRequired,
  onChangeActiveItem: PropTypes.func.isRequired,
  activeItem: PropTypes.any,
};

const mapStateToProps = (state) => ({
  offers: getOffersSelector(state),
  activeCity: getActiveCitySelector(state),
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);

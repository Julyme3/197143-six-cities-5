import React from "react";
import {connect} from "react-redux";
import {OfferType, ReviewsType, OffersType} from "../../types";
import withForm from "../../hocs/with-form/with-form";
import ReviewForm from "../review-form/review-form";
import ReviewsList from "../reviews-list/reviews-list";
import Map from "../map/map";
import OfferListNear from "../offer-list-near/offer-list-near";
import {getNearestOffers} from "../../offers";
import {Type} from "../../const";
import MainLayout from "../../layouts/main-layout/main-layout";

const ReviewFormWrapped = withForm(ReviewForm);
const RoomScreen = (props) => {
  const {offer, reviews} = props;
  const {details, user} = offer;
  const nearestOffers = getNearestOffers(props.offers.filter((item) => item.typeComponent === Type.NEAR), offer);

  return (
    <MainLayout
      classNameWrap="page__main--property"
    >
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.src.map((srcItem, i) => {
              return (
                <div
                  key={`${i}-${srcItem}`}
                  className="property__image-wrapper"
                >
                  <img className="property__image" src={srcItem} alt="Photo studio" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {offer.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.name}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `80%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.raiting}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {details.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {details.adults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">€{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title"></h2>
              <ul className="property__inside-list">
                {details.insideItems.map((insideItem, i) => {
                  return (
                    <li
                      key={`${i}-${insideItem}`}
                      className="property__inside-item">
                      {insideItem}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={user.src} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {user.name}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {details.description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
              <ReviewsList reviews={reviews} />
              <ReviewFormWrapped />
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map
            offers={[...nearestOffers, offer]}
            width={`100%`}
            height={`579px`}
          />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OfferListNear
            offers={nearestOffers}
          />
        </section>
      </div>
    </MainLayout>
  );
};

RoomScreen.propTypes = {
  offer: OfferType,
  reviews: ReviewsType,
  offers: OffersType,
};

const mapStateToProps = (state) => ({
  offers: state.DATA.offers,
});

export {RoomScreen};

export default connect(mapStateToProps, null)(RoomScreen);

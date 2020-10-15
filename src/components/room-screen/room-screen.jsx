import React from "react";
import {OfferType, ReviewsType, OffersType} from "../../types";
import Header from "../header/header";
import OfferCard from "../offer-card/offer-card";
import ReviewForm from "../review-form/review-form";

const RoomScreen = (props) => {
  const {offer, reviews, offers} = props;
  const {details, user} = offer;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.src.map((srcItem, i) => {
                return (
                  <div
                    key={`${i}-${srcItem}`}
                    className="property__image-wrapper">
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
                <ul className="reviews__list">
                  {reviews.length && reviews.map((review, i) => {
                    return (
                      <li
                        className="reviews__item"
                        key={`${i}-${review.date}`}
                      >
                        <div className="reviews__user user">
                          <div className="reviews__avatar-wrapper user__avatar-wrapper">
                            <img className="reviews__avatar user__avatar" src={review.src} width="54" height="54" alt="Reviews avatar" />
                          </div>
                          <span className="reviews__user-name">
                            {review.name}
                          </span>
                        </div>
                        <div className="reviews__info">
                          <div className="reviews__rating rating">
                            <div className="reviews__stars rating__stars">
                              <span style={{width: `80%`}}></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <p className="reviews__text">
                            {review.text}
                          </p>
                          <time className="reviews__time" dateTime={review.date.toString()}>{review.date.toString()}</time>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offers.length && offers.map((nearOffer) => {
                return (
                  <OfferCard
                    key={nearOffer.id}
                    offer={nearOffer}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

RoomScreen.propTypes = {
  offer: OfferType,
  reviews: ReviewsType,
  offers: OffersType,
};

export default RoomScreen;

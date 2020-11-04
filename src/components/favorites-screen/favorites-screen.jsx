import React from "react";
import {Link} from "react-router-dom";
import {OffersType} from "../../types";
import Footer from "../footer/footer";
import MainLayout from "../../layouts/main-layout/main-layout";

const FavoritesScreen = (props) => {
  const bookMarkOffers = props.offers.filter((offer) => offer.isBookmark);

  return (
    <>
      <MainLayout
        classNameWrap="page__main--favorites"
      >
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to="/">
                      <span>Amsterdam</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {bookMarkOffers.map((offer) => {
                    return (
                      <article
                        className="favorites__card place-card"
                        key={offer.id}
                      >
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <a href="#">
                            <img
                              className="place-card__image"
                              src={offer.src[0]}
                              width="150" height="110"
                              alt="Place image"
                            />
                          </a>
                        </div>
                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">€{offer.price}</b>
                              <span className="place-card__price-text">/&nbsp;night</span>
                            </div>
                            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                              <svg className="place-card__bookmark-icon" width="18" height="19">
                                <use xlinkHref="#icon-bookmark"></use>
                              </svg>
                              <span className="visually-hidden">In bookmarks</span>
                            </button>
                          </div>
                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={{width: `100%`}}></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <h2 className="place-card__name">
                            <Link to={`/offer/${offer.id}`}>{offer.name}</Link>
                          </h2>
                          <p className="place-card__type">{offer.type}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};

FavoritesScreen.propTypes = {
  offers: OffersType
};

export default FavoritesScreen;

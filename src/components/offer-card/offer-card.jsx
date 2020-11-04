import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {OfferType} from "../../types";
import {Type} from "../../const";

const OffserCard = (props) => {
  const {offer, onChangeActiveOffer = undefined, className, classNameInner} = props;
  const isMainType = offer.typeComponent === Type.MAIN;
  return (
    <article
      className={`${className} place-card`}
      onMouseEnter = {isMainType ? () => onChangeActiveOffer(offer.coords) : undefined}
      onMouseLeave = {isMainType ? () => onChangeActiveOffer(null) : undefined}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${classNameInner} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.src[0]} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
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
            <span style={{width: `80%`}}></span>
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
};

OffserCard.propTypes = {
  offer: OfferType,
  onChangeActiveOffer: PropTypes.func,
  className: PropTypes.string,
  classNameInner: PropTypes.string,
};

export default OffserCard;

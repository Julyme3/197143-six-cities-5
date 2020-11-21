import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {OfferType} from "../../types";
import Rating from "../rating/rating";

const OffserCard = (props) => {
  const {offer,
    onChangeActiveOffer = undefined,
    className,
    classNameInner,
    onChangeFavorite,
    width = `260px`,
    height = `200px`} = props;
  const isFavorite = offer.isBookmark;
  const isFavoriteToNumber = Number(!isFavorite);

  return (
    <article
      className={`${className} place-card`}
      onMouseEnter = {() => onChangeActiveOffer(offer.id)}
      onMouseLeave = {() => onChangeActiveOffer(null)}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${classNameInner} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.preview_image} width={width} height={height} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button
              ${isFavorite && `place-card__bookmark-button--active`}`
            }
            type="button"
            onClick={() => onChangeFavorite(offer.id, isFavoriteToNumber)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <Rating rating={offer.raiting} className="place-card__stars" />
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
  onChangeFavorite: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default OffserCard;

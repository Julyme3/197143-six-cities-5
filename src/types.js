import PropTypes from "prop-types";
import {TypeProperty} from "./const";

export const OfferType = PropTypes.shape({
  src: PropTypes.array.isRequired,
  isPremium: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([TypeProperty.APARTMENT, TypeProperty.HOTEL, TypeProperty.ROOM, TypeProperty.HOUSE]).isRequired,
  raiting: PropTypes.number,
  price: PropTypes.number.isRequired,
  isBookmark: PropTypes.bool.isRequired,
  details: PropTypes.shape({
    bedrooms: PropTypes.number.isRequired,
    adults: PropTypes.number.isRequired,
    insideItems: PropTypes.array.isRequired,
    description: PropTypes.string
  }).isRequired,
  user: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired
  }).isRequired,
});

export const ReviewsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
  raiting: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  text: PropTypes.string,
}));

export const CitiesType = PropTypes.arrayOf(PropTypes.string).isRequired;

export const OffersType = PropTypes.arrayOf(OfferType).isRequired;

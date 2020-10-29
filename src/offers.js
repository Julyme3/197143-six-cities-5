import {compare} from "./utils";
import {SortType} from "./const";

export const getOffersByCity = (offers, selectedCity) => offers.filter((offer) => offer.city === selectedCity);
export const getNearestOffers = (offers, selectedOffer) => {
  const MAX_LEN = 4;
  const coordsDiff = offers.map((offer) => {
    const longitude = selectedOffer.coords[0] - offer.coords[0]; // долгота
    const latitude = selectedOffer.coords[1] - offer.coords[1]; // широта
    const defferenciesSum = Math.abs(longitude + latitude);
    return {
      diff: defferenciesSum,
      id: offer.id,
    };
  }).sort(compare);

  const ids = coordsDiff.map((diff) => diff.id).slice(0, Math.min(MAX_LEN, coordsDiff.length));
  return offers.filter((offer) => {
    if (ids.includes(offer.id)) {
      return offer;
    } else {
      return false;
    }
  });
};

export const sortByPriceHigh = (offerA, offerB) => offerA.price - offerB.price;

export const sortByPriceLow = (offerA, offerB) => offerB.price - offerA.price;

export const sortByRatedTop = (offerA, offerB) => offerB.raiting - offerA.raiting;

export const sortOffers = (sort, offers, defaultOffers) => {
  switch (sort) {
    case SortType.PRICE_TO_HIGH:
      offers.sort(sortByPriceHigh);
      break;
    case SortType.PRICE_TO_LOW:
      offers.sort(sortByPriceLow);
      break;
    case SortType.TOP_RATED:
      offers.sort(sortByRatedTop);
      break;
    case SortType.POPULAR:
      offers = defaultOffers;
      break;
  }
  return offers;
};

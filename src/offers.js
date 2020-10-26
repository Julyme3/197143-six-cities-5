import {compare} from "./utils";

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

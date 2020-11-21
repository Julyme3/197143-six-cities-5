import {Cities} from "./const";

export const formattedOfferAdaptToClient = (offers) => {
  const formatteOffers = {};
  Cities.forEach((city) => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city);
    if (filteredOffers.length) {
      formatteOffers[city] = filteredOffers;
    }
  });
  return formatteOffers;
};

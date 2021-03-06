import {SortType, MAX_RATING} from "./const";

export const getOffersByCity = (offers, selectedCity) => offers.filter((offer) => offer.city.name === selectedCity);

export const sortByPriceHigh = (offerA, offerB) => offerA.price - offerB.price;

export const sortByPriceLow = (offerA, offerB) => offerB.price - offerA.price;

export const sortByRatedTop = (offerA, offerB) => offerB.raiting - offerA.raiting;

export const sortOffers = (sort, offers) => {
  switch (sort) {
    case SortType.PRICE_TO_HIGH:
      return offers.slice().sort(sortByPriceHigh);
    case SortType.PRICE_TO_LOW:
      return offers.slice().sort(sortByPriceLow);
    case SortType.TOP_RATED:
      return offers.slice().sort(sortByRatedTop);
    case SortType.POPULAR:
      return offers;
  }
  return offers;
};

export const offerAdaptToClient = (offer, type) => {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        src: offer.images,
        isPremium: offer.is_premium,
        name: offer.title,
        raiting: offer.rating,
        isBookmark: offer.is_favorite,
        previewImage: offer.preview_image,
        city: {
          location: [offer.city.location.latitude, offer.city.location.longitude],
          name: offer.city.name,
          zoom: offer.city.location.zoom,
        },
        coords: [offer.location.latitude, offer.location.longitude],
        details: {
          bedrooms: offer.bedrooms,
          adults: offer.max_adults,
          insideItems: offer.goods,
          description: offer.description,
        },
        user: {
          src: offer.host.avatar_url,
          id: offer.host.id,
          name: offer.host.name,
          isSuper: offer.host.is_pro,
        },
        typeComponent: type === `near` ? `near` : `main`,
      }
  );

  delete adaptedOffer.host;
  delete adaptedOffer.goods;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.bedrooms;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.title;
  delete adaptedOffer.rating;
  delete adaptedOffer.images;
  delete adaptedOffer.location;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};

export const calcRating = (value) => (value * 100) / MAX_RATING;

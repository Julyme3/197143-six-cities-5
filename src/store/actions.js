import offers from "../mocks/offers";
import {getOffersByCity} from "../offers";

export const ActionType = {
  SET_OFFERS_ACTION: `SET_OFFERS_ACTION`,
  SET_SELECTED_CITY_ACTION: `SET_SELECTED_CITY_ACTION`,
};

export const ActionCreator = {
  setOffersAction: (selectedCity) => {
    const offersByCity = getOffersByCity(offers, selectedCity);

    return {
      type: ActionType.SET_OFFERS_ACTION,
      payload: offersByCity,
    };
  },
  setSelectedCityAction: (payload) => ({
    type: ActionType.SET_SELECTED_CITY_ACTION,
    payload,
  })
};

export const ActionType = {
  SET_OFFERS_ACTION: `SET_OFFERS_ACTION`,
  SET_SELECTED_CITY_ACTION: `SET_SELECTED_CITY_ACTION`,
  SET_ACTIVE_OFFER_ACTION: `SET_ACTIVE_OFFER_ACTION`,
  SET_NEARBY_OFFERS_ACTION: `SET_NEARBY_OFFERS_ACTION`,
  SET_AUTHORIZATION_STATUS: `SET_AUTHORIZATION_STATUS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const setOffersAction = (payload) => ({
  type: ActionType.SET_OFFERS_ACTION,
  payload,
});

export const setSelectedCityAction = (payload) => ({
  type: ActionType.SET_SELECTED_CITY_ACTION,
  payload,
});

export const setActiveOfferAction = (payload) => ({
  type: ActionType.SET_ACTIVE_OFFER_ACTION,
  payload,
});

export const setNearbyOffersAction = (payload) => ({
  type: ActionType.SET_NEARBY_OFFERS_ACTION,
  payload,
});

export const setAuthorizationStatus = (payload) => ({
  type: ActionType.SET_AUTHORIZATION_STATUS,
  payload,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

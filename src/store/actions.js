export const ActionType = {
  SET_OFFERS_ACTION: `SET_OFFERS_ACTION`,
  SET_SELECTED_CITY_ACTION: `SET_SELECTED_CITY_ACTION`,
};

export const setOffersAction = (payload) => ({
  type: ActionType.SET_OFFERS_ACTION,
  payload,
});

export const setSelectedCityAction = (payload) => ({
  type: ActionType.SET_SELECTED_CITY_ACTION,
  payload,
});

export const ActionType = {
  SET_OFFERS_ACTION: `SET_OFFERS_ACTION`,
  SET_SELECTED_CITY_ACTION: `SET_SELECTED_CITY_ACTION`,
};

export const ActionCreator = {
  setOffersAction: (payload) => ({
    type: ActionType.SET_OFFERS_ACTION,
    payload,
  }),
  setSelectedCityAction: (payload) => ({
    type: ActionType.SET_SELECTED_CITY_ACTION,
    payload,
  }),
};

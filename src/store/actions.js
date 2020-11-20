export const ActionType = {
  SET_OFFERS_ACTION: `SET_OFFERS_ACTION`,
  SET_SELECTED_CITY_ACTION: `SET_SELECTED_CITY_ACTION`,
  SET_ACTIVE_OFFER_ACTION: `SET_ACTIVE_OFFER_ACTION`,
  SET_NEARBY_OFFERS_ACTION: `SET_NEARBY_OFFERS_ACTION`,
  SET_AUTHORIZATION_STATUS: `SET_AUTHORIZATION_STATUS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_NOTIFICATION_ACTION: `SET_NOTIFICATION_ACTION`,
  SET_START_LOADING_ACTION: `SET_START_LOADING_ACTION`,
  SET_STOP_LOADING_ACTION: `SET_STOP_LOADING_ACTION`,
  SET_POST_COMMENT_STATUS_ACTION: `SET_POST_COMMENT_STATUS_ACTION`,
  SET_COMMENTS_ACTION: `SET_COMMENTS_ACTION`,
  SET_LIST_FAVORITE_ACTION: `SET_LIST_FAVORITE_ACTION`,
  SET_IS_FAVORITE_ACTION: `SET_IS_FAVORITE_ACTION`,
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

export const setNotificationAction = (payload) => ({
  type: ActionType.SET_NOTIFICATION_ACTION,
  payload,
});

export const setStartLoadingAction = () => ({
  type: ActionType.SET_START_LOADING_ACTION,
});

export const setStopLoadingAction = () => ({
  type: ActionType.SET_STOP_LOADING_ACTION,
});

export const setPostCommentStatusAction = () => ({
  type: ActionType.SET_POST_COMMENT_STATUS_ACTION,
});

export const setCommentsAction = (payload) => ({
  type: ActionType.SET_COMMENTS_ACTION,
  payload,
});

export const setFavoritesListAction = (payload) => ({
  type: ActionType.SET_LIST_FAVORITE_ACTION,
  payload,
});

export const setIsFavoriteAction = (payload) => ({
  type: ActionType.SET_IS_FAVORITE_ACTION,
  payload,
});

import {
  setOffersAction,
  setActiveOfferAction,
  setAuthorizationStatus,
  redirectToRoute,
  setNearbyOffersAction,
  setNotificationAction,
  setStopLoadingAction,
  setPostCommentStatusAction,
  setCommentsAction,
  setFavoritesListAction,
} from "./actions";
import {offerAdaptToClient} from "../offers";
import {AuthorizationStatus, APIRoute, HttpCode} from "../const";
import {commentAdaptToClient} from "../reviews";
import {formattedOfferAdaptToClient} from "../favorites";

// done
export const fetchOffersListAction = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(setOffersAction(data.map(offerAdaptToClient)));
    })
    .catch((error) => {
      dispatch(setNotificationAction({
        showError: true,
        content: error.message,
      }));
    })
);

// done
export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH)))
    .catch(()=>{})
);

// done
export const login = (data) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, data)
    .then(() => {
      dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(redirectToRoute(APIRoute.ROOT));
    })
    .catch((error) => {
      dispatch(setNotificationAction({
        showError: true,
        content: error.message,
      }));
    })
);

// done
export const fetchFullOfferAction = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => {
      dispatch(setActiveOfferAction(offerAdaptToClient(data)));
    })
    .catch((error) => {
      dispatch(setNotificationAction({
        showError: true,
        content: error.message,
      }));
    })
);

// done
export const fetchNearbyOffersAction = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => {
      dispatch(setNearbyOffersAction(data.map((offer) => offerAdaptToClient(offer, `near`))));
    })
    .catch((error) => {
      dispatch(setNotificationAction({
        showError: true,
        content: error.message,
      }));
    })
);

// done
export const postCommentAction = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {
    rating,
    comment,
  })
    .then(() => {
      dispatch(setPostCommentStatusAction());
      dispatch(fetchCommentsAction(id));
    })
    .catch((error) => {
      dispatch(setNotificationAction({
        showError: true,
        content: error.message,
      }));
    })
    .finally(() => {
      dispatch(setStopLoadingAction());
    })
);

// done
export const fetchCommentsAction = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(setCommentsAction(data.map(commentAdaptToClient)));
    })
    .catch((error) => {
      dispatch(setNotificationAction({
        showError: true,
        content: error.message,
      }));
    })
);

export const fetchFavoritesAction = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(setFavoritesListAction(formattedOfferAdaptToClient(data.map((offer) => offerAdaptToClient(offer, `near`)))));
    })
    .catch((error) => {
      dispatch(setNotificationAction({
        showError: true,
        content: error.message,
      }));
    })
    .finally(() => {
      dispatch(setStopLoadingAction());
    })
);

export const postFavoriteAction = (id, status, action, type) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => {
      dispatch(action(offerAdaptToClient(data, type)));
    })
    .catch(({response}) => {
      if (response && response.status === HttpCode.UNAUTHORIZED) {
        dispatch(redirectToRoute(APIRoute.LOGIN));
      }
    })
);

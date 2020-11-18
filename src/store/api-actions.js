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
} from "./actions";
import {offerAdaptToClient} from "../offers";
import {AuthorizationStatus, APIRoute} from "../const";
import {commentAdaptToClient} from "../reviews";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(setOffersAction(data.map(offerAdaptToClient)));
    })
    .catch(()=>{})
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH)))
    .catch(()=>{})
);

export const login = (data) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, data)
    .then(() => {
      dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(redirectToRoute(APIRoute.ROOT));
    })
    .catch((error)=>{
      throw error;
    })
);

export const fetchFullOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => {
      dispatch(setActiveOfferAction(offerAdaptToClient(data)));
    })
    .catch((error) => {
      throw error;
    })
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => {
      dispatch(setNearbyOffersAction(data.map((offer) => offerAdaptToClient(offer, `near`))));
    })
    .catch((error) => {
      throw error;
    })
);

export const postCommentAction = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {
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
      throw error;
    })
    .finally(() => {
      dispatch(setStopLoadingAction());
      setTimeout(() => {
        dispatch(setNotificationAction({
          showError: false,
          content: ``,
        }));
      }, 5000);
    })
);

export const fetchCommentsAction = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(setCommentsAction(data.map(commentAdaptToClient)));
    })
    .catch((error) => {
      throw error;
    })
);

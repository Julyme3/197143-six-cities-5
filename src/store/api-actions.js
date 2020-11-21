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
import {AuthorizationStatus, APIRoute} from "../const";
import {commentAdaptToClient} from "../reviews";
import {formattedOfferAdaptToClient} from "../favorites";

export const fetchOffersListAction = () => (dispatch, _getState, api) => (
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
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => {
      dispatch(setActiveOfferAction(offerAdaptToClient(data)));
    })
    .catch((error) => {
      throw error;
    })
);

export const fetchNearbyOffersAction = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => {
      dispatch(setNearbyOffersAction(data.map((offer) => offerAdaptToClient(offer, `near`))));
    })
    .catch(() =>{})
);

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
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(setCommentsAction(data.map(commentAdaptToClient)));
    })
    .catch((error) => {
      throw error;
    })
);

export const fetchFavoritesAction = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(setFavoritesListAction(formattedOfferAdaptToClient(data.map((offer) => offerAdaptToClient(offer, `near`)))));
    })
    .catch(()=>{})
);

export const postFavoriteAction = (id, status, action) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => {
     // dispatch(action(id));
      dispatch(setActiveOfferAction(offerAdaptToClient(data)));
    })
    .catch(()=>{})
);

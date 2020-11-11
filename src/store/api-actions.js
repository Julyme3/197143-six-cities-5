import {setOffersAction, setAuthorizationStatus, redirectToRoute} from "./actions";
import {offerAdaptToClient} from "../offers";
import {AuthorizationStatus, APIRoute} from "../const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(setOffersAction(data.map(offerAdaptToClient)));
    })
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
    .catch((err)=>{
      throw err;
    })
);

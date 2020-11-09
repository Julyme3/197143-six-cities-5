import {setOffersAction} from "./actions";
import {offerAdaptToClient} from "../offers";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(setOffersAction(data.map(offerAdaptToClient)));
    })
);

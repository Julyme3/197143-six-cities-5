import {extend} from "../../../utils";
import {ActionType} from "../../actions";

const initialState = {
  defaultOffers: [],
  offers: [],
  activeOffer: null,
  nearbyOffers: [],
  comments: [],
};

const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_OFFERS_ACTION:
      return extend(state, {
        offers: [...action.payload],
      });
    case ActionType.SET_ACTIVE_OFFER_ACTION:
      return extend(state, {
        activeOffer: action.payload,
      });
    case ActionType.SET_NEARBY_OFFERS_ACTION:
      return extend(state, {
        nearbyOffers: [...action.payload],
      });
    case ActionType.SET_COMMENTS_ACTION:
      return extend(state, {
        comments: action.payload,
      });
  }

  return state;
};

export {offerData};

import {extend} from "../utils";
import {ActionType} from "./actions";
import offers from "../mocks/offers";
import cities from "../mocks/cities";
import {getOffersByCity} from "../offers";

const initialState = {
  city: cities[0],
  offers: getOffersByCity(offers, cities[0]),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_OFFERS_ACTION:
      return extend(state, {
        offers: [...action.payload],
      });
    case ActionType.SET_SELECTED_CITY_ACTION:
      return extend(state, {
        city: action.payload,
      });
    default:
      return state;
  }
};

export {reducer};

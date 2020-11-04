import {extend} from "../utils";
import {ActionType} from "./actions";
import offers from "../mocks/offers";
import cities from "../mocks/cities";

const initialState = {
  activeCity: cities[0],
  defaultOffers: offers,
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_OFFERS_ACTION:
      return extend(state, {
        offers: [...action.payload],
      });
    case ActionType.SET_SELECTED_CITY_ACTION:
      return extend(state, {
        activeCity: action.payload,
      });
    default:
      return state;
  }
};

export {reducer};

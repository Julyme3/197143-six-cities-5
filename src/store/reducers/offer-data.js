import {extend} from "../../utils";
import {ActionType} from "../actions";
import offers from "../../mocks/offers";

const initialState = {
  defaultOffers: offers,
  offers: offers || [],
};

const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_OFFERS_ACTION:
      return extend(state, {
        offers: [...action.payload],
      });
  }

  return state;
};

export {offerData};

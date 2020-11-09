import {extend} from "../../../utils";
import {ActionType} from "../../actions";

const initialState = {
  defaultOffers: [],
  offers: [],
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

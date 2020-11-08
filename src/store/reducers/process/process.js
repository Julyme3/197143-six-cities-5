import {extend} from "../../../utils";
import {ActionType} from "../../actions";
import {Cities} from "../../../const";

const initialState = {
  activeCity: Cities[0],
};

const process = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_SELECTED_CITY_ACTION:
      return extend(state, {
        activeCity: action.payload,
      });
  }

  return state;
};

export {process};

import {extend} from "../../../utils";
import {ActionType} from "../../actions";
import {Cities} from "../../../const";

const initialState = {
  activeCity: Cities[0],
  isLoading: false,
  commentStatus: false,
};

const process = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_SELECTED_CITY_ACTION:
      return extend(state, {
        activeCity: action.payload,
      });
    case ActionType.SET_START_LOADING_ACTION:
      return extend(state, {
        isLoading: true,
      });
    case ActionType.SET_STOP_LOADING_ACTION:
      return extend(state, {
        isLoading: false,
      });
    case ActionType.SET_POST_COMMENT_STATUS_ACTION:
      return extend(state, {
        commentStatus: true,
      });
  }

  return state;
};

export {process};

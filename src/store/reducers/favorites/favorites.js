import {extend} from "../../../utils";
import {ActionType} from "../../actions";

const initialState = {
  favoritesList: [],
  isFavorite: false,
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LIST_FAVORITE_ACTION:
      return extend(state, {
        favoritesList: action.payload,
      });
    case ActionType.SET_IS_FAVORITE_ACTION:
      return extend(state, {
        isFavorite: action.payload,
      });
  }

  return state;
};

export {favorites};

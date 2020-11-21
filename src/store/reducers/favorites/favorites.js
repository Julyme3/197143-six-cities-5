import {extend} from "../../../utils";
import {ActionType} from "../../actions";

const initialState = {
  favoritesList: {},
  isFavorite: false,
  isLoading: false,
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LIST_FAVORITE_ACTION:
      return extend(state, {
        favoritesList: action.payload,
      });
    case ActionType.UPDATE_FAVORITE_IN_LIST_ACTION:
      return extend(state, {
        favoritesList: extend(state.favoritesList, {
          [action.payload.city.name]: state.favoritesList[action.payload.city.name].filter((offer) => offer.id !== action.payload.id)
        }),
      });
    case ActionType.SET_START_LOADING_ACTION:
      return extend(state, {
        isLoading: true,
      });
    case ActionType.SET_STOP_LOADING_ACTION:
      return extend(state, {
        isLoading: false,
      });
  }

  return state;
};

export {favorites};

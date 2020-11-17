import {extend} from "../../../utils";
import {ActionType} from "../../actions";

const initialState = {
  showError: false,
  content: ``,
};

const notification = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_NOTIFICATION_ACTION:
      return extend(state, {
        showError: action.payload.showError,
        content: action.payload.content,
      });
  }

  return state;
};

export {notification};

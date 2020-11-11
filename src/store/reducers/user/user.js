import {extend} from "../../../utils";
import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../actions";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};

export {user};

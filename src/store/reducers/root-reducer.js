import {offerData} from "./offer-data/offer-data";
import {process} from "./process/process";
import {user} from "./user/user";
import {combineReducers} from "redux";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: offerData,
  [NameSpace.PROCESS]: process,
  [NameSpace.USER]: user,
});

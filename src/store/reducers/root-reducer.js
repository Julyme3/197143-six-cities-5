import {offerData} from "./offer-data";
import {process} from "./process";
import {combineReducers} from "redux";

const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
};

export default combineReducers({
  [NameSpace.DATA]: offerData,
  [NameSpace.PROCESS]: process,
});

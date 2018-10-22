import { combineReducers } from "redux";
import counter from "./counter";
import chooseDate from "./chooseDate";

export default combineReducers({
  counter,
  chooseDate
});

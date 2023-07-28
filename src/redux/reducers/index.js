import { combineReducers } from "redux";
import { userReducers } from "./userReducers";

const reducers = combineReducers({
  userReducers: userReducers,
});

export default reducers;

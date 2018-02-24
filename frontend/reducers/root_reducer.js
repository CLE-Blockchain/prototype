import { combineReducers } from "redux";
import accreditorReducer from "./accreditor_reducer";

const rootReducer = combineReducers({
  accreditor: accreditorReducer
});

export default rootReducer;

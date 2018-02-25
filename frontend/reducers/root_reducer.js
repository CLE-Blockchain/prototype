import { combineReducers } from "redux";
// import accreditorReducer from "./accreditor_reducer";
import recordsReducer from "./records_reducer";

const rootReducer = combineReducers({
  records: recordsReducer
  // accreditor: accreditorReducer
});

export default rootReducer;

import _ from "lodash";
import { RECEIVE_RECORD, RECEIVE_RECORDS } from "../actions/record_actions";

const recordsReducer = (state = [], action) => {
  Object.freeze(state);

  let newState;

  switch (action.type) {
    case RECEIVE_RECORDS:
      return action.records;
    case RECEIVE_RECORD:
      newState = state.concat([action.record]);
      return newState;
    default:
      return state;
  }
};

export default recordsReducer;

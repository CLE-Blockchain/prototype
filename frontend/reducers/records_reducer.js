import _ from "lodash";
import { RECEIVE_RECORD } from "../actions/record_actions";

const recordsReducer = (state, action) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_RECORD:
      newState = _.merge({}, state, action.record);
      return newState;
    default:
      return state;
  }
};

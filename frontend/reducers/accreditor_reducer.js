import _ from "lodash";
import { RECEIVE_TRANSACTION } from "../actions/accreditor_actions";

const accreditorReducer = (state, action) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_TRANSACTION:
      newState = _.merge({}, state);
      return newState;
    default:
      return state;
  }
};

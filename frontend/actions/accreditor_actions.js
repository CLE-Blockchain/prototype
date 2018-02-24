import * as AccreditorApiUtil from "../util/accreditor_api_util";

export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";

export const receiveTransaction = payload => ({
  type: RECEIVE_TRANSACTION,
  payload
});

export const createTransaction = data => dispatch => {
  return AccreditorApiUtil.createTransaction(data).then(
    identityId => {
      dispatch(receiveTransaction(identityId));
      console.log("Posted data:", data);
      return identityId;
    },
    error => {
      console.log(error);
    }
  );
};

export const fetchTransaction = identityId => dispatch => {
  return AccreditorApiUtil.fetchTransaction(identityId).then(payload => {
    console.log(unescape(payload));
  });
};

window.fetchTransaction = fetchTransaction;

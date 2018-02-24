import * as AccreditorApiUtil from "../util/accreditor_api_util";

export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";

export const receiveTransaction = payload => ({
  type: RECEIVE_TRANSACTION,
  payload
});

export const createTransaction = data => dispatch => {
  return AccreditorApiUtil.createTransaction(data).then(
    identityId => {
      console.log("Posted data:", data);
      console.log("Identity ID:", identityId);
      return identityId;
    },
    error => {
      console.log(error);
    }
  );
};

export const fetchTransaction = identityId => dispatch => {
  return AccreditorApiUtil.fetchTransaction(identityId).then(payload => {
    const cle = JSON.parse(unescape(payload.data[0].value));
    dispatch(receiveTransaction(cle));
    console.log(cle);
  });
};

window.fetchTransaction = fetchTransaction;

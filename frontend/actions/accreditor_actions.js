import * as AccreditorApiUtil from "../util/accreditor_api_util";

export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";

export const receiveTransaction = payload => ({
  type: RECEIVE_TRANSACTION,
  payload
});

export const createTransaction = data => dispatch => {
  return AccreditorApiUtil.createTransaction(data).then(identityId => {
    console.log("IdentityId:", identityId);
    console.log("Data:", data);
    return (
      AccreditorApiUtil.createTransactionAssoc(
        data.attorneyId,
        identityId.identityId,
        data.classTitle
      ).then(arg => {
        console.log("Posted data:", data);
        console.log("Identity ID:", identityId);
        console.log("arg:", arg);
        return identityId;
      }),
      error => {
        console.log(error);
      }
    );
  });
};

export const fetchTransaction = identityId => dispatch => {
  return AccreditorApiUtil.fetchTransaction(identityId).then(payload => {
    const cle = JSON.parse(unescape(payload.data[0].value));
    dispatch(receiveTransaction(cle));
    console.log(cle);
  });
};

window.fetchTransaction = integraId =>
  window.dispatch(fetchTransaction(integraId));

export const fetchLawyerTransactions = lawyerId => dispatch => {
  return AccreditorApiUtil.fetchLawyerTransactions(lawyerId).then(payload => {
    dispatch(receiveTransaction(payload));
    console.log(payload);
  });
};

window.fetchLawyerTransactions = lawyerId =>
  window.dispatch(fetchLawyerTransactions(lawyerId));

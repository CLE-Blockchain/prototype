import * as AccreditorApiUtil from "../util/accreditor_api_util";

export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";

export const receiveTransaction = payload => ({
  type: RECEIVE_TRANSACTION,
  payload
});

export const createTransaction = data => dispatch => {
  return AccreditorApiUtil.createTransaction(data).then(() => {
    dispatch(receiveTransaction(data));
    return data;
  });
};

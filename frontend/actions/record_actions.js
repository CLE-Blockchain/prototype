import * as RecordApiUtil from "../util/record_api_util";

export const RECEIVE_RECORD = "RECEIVE_RECORD";
export const RECEIVE_RECORDS = "RECEIVE_RECORDS";

export const receiveRecord = record => ({
  type: RECEIVE_RECORD,
  record
});

export const receiveRecords = records => ({
  type: RECEIVE_RECORDS,
  records
});

export const createRecord = data => dispatch => {
  return RecordApiUtil.createRecord(data).then(identityId => {
    console.log("IdentityId:", identityId);
    console.log("Data:", data);
    return (
      RecordApiUtil.createRecordAssoc(
        data.attorneyId,
        identityId.identityId,
        data.classTitle
      ).then(arg => {
        console.log("Posted data:", data);
        console.log("Identity ID:", identityId);
        console.log("arg:", arg);
        dispatch(receiveRecord(arg));
        return identityId;
      }),
      error => {
        console.log(error);
      }
    );
  });
};

export const uploadRecord = data => dispatch => {
  return (
    RecordApiUtil.createRecord(data).then(identityId => {
      RecordApiUtil.createRecordAssoc(
        data.attorneyId,
        identityId.identityId,
        data.classTitle
      ).then(arg => {
        dispatch(fetchRecord(identityId.identityId));
        return arg;
      });
    }),
    error => console.log(error)
  );
};

export const fetchRecord = identityId => dispatch => {
  return RecordApiUtil.fetchRecord(identityId).then(payload => {
    const cle = JSON.parse(unescape(payload.data[0].value));
    dispatch(receiveRecord(cle));
    console.log(cle);
  });
};

window.fetchRecord = integraId => window.dispatch(fetchRecord(integraId));

export const fetchLawyerRecords = lawyerId => dispatch => {
  return RecordApiUtil.fetchLawyerRecords(lawyerId).then(payload => {
    dispatch(receiveRecords([]));
    payload.forEach(transaction => {
      dispatch(fetchRecord(transaction.IntegraId));
    });
    console.log(payload);
  });
};

window.fetchLawyerRecords = lawyerId =>
  window.dispatch(fetchLawyerRecords(lawyerId));

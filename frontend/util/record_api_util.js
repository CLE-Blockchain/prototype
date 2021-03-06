export const createRecord = data => {
  return $.ajax({
    url:
      "https://integrawalletproxy.azurewebsites.net/fwd/api/registerIdentity",
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    dataType: "json",
    data: {
      type: "com.integraledger.lmat",
      value: escape(JSON.stringify(data))
    }
  });
};

export const fetchRecord = integraId => {
  return $.ajax({
    url: `https://integrawalletproxy.azurewebsites.net/fwd/api/identityExists?id=${integraId}`,
    method: "get"
  });
};

export const createRecordAssoc = (lawyerId, integraId, courseName) => {
  var dataObj = {
    LawyerId: lawyerId,
    IntegraId: integraId,
    CourseName: courseName
  };
  console.log(dataObj);
  return $.ajax({
    url: "https://credibleapi.azurewebsites.net/api/LawyerIntegraIdMappings",
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    dataType: "json",
    data: dataObj
  });
};

export const fetchLawyerRecords = lawyerId => {
  return $.ajax({
    url: `https://credibleapi.azurewebsites.net/api/LawyerIntegraIdMappings/${lawyerId}`,
    method: "get"
  });
};

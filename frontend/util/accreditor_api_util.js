export const createTransaction = data => {
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

export const fetchTransaction = identityId => {
  return $.ajax({
    url: `https://integrawalletproxy.azurewebsites.net/fwd/api/identityExists?id=${identityId}`,
    method: "get"
  });
};
// window.fetchTransaction = fetchTransaction;

export const createTransaction = data => {
  return $.ajax({
    url: "/placeholder",
    method: "post",
    dataType: "json",
    data
  });
};

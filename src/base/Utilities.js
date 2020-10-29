export const DateDiff = (date1, date2) => {
  var datediff = date1.getTime() - date2.getTime();
  return datediff / (24 * 60 * 60 * 1000);
};

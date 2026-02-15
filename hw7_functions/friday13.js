function countFridays13th(startDate, endDate) {
  const dates = [];
  const end = new Date(endDate);
  let iterable = new Date(startDate);

  while (iterable <= end) {
    dates.push(new Date(iterable));
    iterable.setDate(iterable.getDate() + 1);
  }
  const fridays13 = dates.filter(
    (date) => date.getDate() === 13 && date.getDay() === 5,
  );
  return fridays13.length;
}

console.log(countFridays13th("2000-01-26", "2026-01-26")); //44
console.log(countFridays13th("1993-01-01", "2001-02-12")); //12
console.log(countFridays13th("1993-01-01", "2026-01-26")); //55
console.log(countFridays13th("1970-01-01", "2026-01-26")); //96
console.log(countFridays13th("1970-01-01", "2001-02-12")); //53
console.log(countFridays13th("1950-01-01", "1970-01-01")); //35
console.log(countFridays13th("1950-01-01", "2001-02-12")); //88

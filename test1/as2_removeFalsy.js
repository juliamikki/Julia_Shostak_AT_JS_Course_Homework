const myArr = [false, 0, -0, 0n, "", null, undefined, NaN, -78, 1327, "string", 28, "abc", "abcdefd", [], {}, true, "0", " ", -820];

//solution #1 (sort only numbers):
function removeFalsy1(array) {
  console.log("/========= Solution 1 (sort only numbers): =========/");
  return array
    .filter((value) => value)
    .filter((value) => typeof value === "number")
    .sort((a, b) => b - a);
}

//solution #2 (sort all as strings):
function removeFalsy2(array) {
  console.log("/========= Solution 2 (sort all as strings): =========/");
  return array
    .filter((value) => value)
    .sort((a, b) =>
      String(b).localeCompare(String(a)),
    );
}

console.log(removeFalsy1(myArr));
console.log(removeFalsy2(myArr));

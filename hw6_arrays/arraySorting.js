const array = [1, -4, 65, 6, -234, 345, 17, -5];

function sortAscending(array) {
  return array.sort((a, b) => a - b);
}

function sortDescending(array) {
  return array.sort((a, b) => b - a);
}

console.log(sortAscending(array));
console.log(sortDescending(array));
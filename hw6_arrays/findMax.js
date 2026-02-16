const array = [3, 67, 0, -158, 15, 134, 8];
const arrayNegative = [-3, -67, -158, -15, -134, -8];

function findMaxWithMath(array) {
  const max = Math.max(...array); // ...array spreads the array into the individual values
  return max;
}

function findMaxWithFor(array) {
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

function findMaxWithReduce(array) {
  return array.reduce((max, number) => {
    if (max < number) {
      max = number;
    }
    return max;
  }, -Infinity);
}

function findMaxWithReduceImproved(array) {
  return array.reduce(
    (max, number) => (max < number ? (max = number) : max),
    -Infinity,
  );
}

console.log(findMaxWithMath(array));
console.log(findMaxWithFor(array));
console.log(findMaxWithReduce(array));
console.log(findMaxWithReduceImproved(array));

console.log(findMaxWithMath(arrayNegative));
console.log(findMaxWithFor(arrayNegative));
console.log(findMaxWithReduce(arrayNegative));
console.log(findMaxWithReduceImproved(arrayNegative));

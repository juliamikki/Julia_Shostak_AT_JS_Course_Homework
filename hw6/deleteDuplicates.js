const array = [4, 5, 6, 4, 8, 12, 8, 6, 6];

//[...x] or Array.from() -> to convert to the array
function deleteDuplicatesWithSet(array) {
  return Array.from(new Set(array));
}

function deleteDuplicatesWithForOfLoop(array) {
  let newArray = [];
  for (const number of array) {
    if (!newArray.includes(number)) {
      newArray.push(number);
    }
  }
  return newArray;
}

//indexOf() -> returns the first occurence of the number
function deleteDuplicatesWithFilter(array) {
  return array.filter((number, index, arr) => arr.indexOf(number) === index);
}

function deleteDuplicatesWithReduce(array) {
  return array.reduce((acc, number) => {
    if (!acc.includes(number)) {
      acc.push(number);
    }
    return acc;
  }, []);
}

// some() -> used to check if at least one element in array satisfies the condition
function deleteDuplicatesWithSome(array) {
  const newArray = [];
  array.forEach((number) => {
    if (!newArray.some((x) => x === number)) { //some() -> true if only the number is not yet in the array
      newArray.push(number);
    }
  });
  return newArray;
}

console.log(deleteDuplicatesWithSet(array));
console.log(deleteDuplicatesWithForOfLoop(array));
console.log(deleteDuplicatesWithFilter(array));
console.log(deleteDuplicatesWithReduce(array));
console.log(deleteDuplicatesWithSome(array));

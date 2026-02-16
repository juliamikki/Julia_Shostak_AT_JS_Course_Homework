const array = [1, 2, 3, 4, 5, 6];

function reverseArray(array) {
  return array.reverse();
}

function reverseWithForAndPush(array) {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

function reverseWithWhileAndPop(array) {
  const reversed = [];
  while (array.length > 0) {
    reversed.push(array.pop());
  }
  return reversed;
}

function reverseWithReduce(array) {
  return array.reduce((reversed, element) => {
    reversed.unshift(element);
    return reversed;
  }, []);
}

function reverseWithReduceRight(array) {
  return array.reduceRight((reversed, element) => {
    reversed.push(element);
    return reversed;
  }, []);
}

//[...array] -> copy of the array
console.log(reverseArray([...array]));
console.log(reverseWithForAndPush([...array]));
console.log(reverseWithWhileAndPop([...array]));
console.log(reverseWithReduce([...array]));
console.log(reverseWithReduceRight([...array]));

//array.reverse() -> mutates the original array
//array.pop() -> mutates the original array
//array.reduce() and array.reduceRight() -> do not mutate the array!!
//array[i] -> doesn't mutate, just read

//push() -> put the element in the end;
//unshift() -> put the element in the front;
//pop() -> deletes the last element and returns;
//shift() -> deletes the first element and returns;

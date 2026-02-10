function createFibonacciWithForLoop(arrayLength) {
  const array = [];
  for (let i = 0; i < arrayLength; i++) {
    let next;
    if (i === 0) {
      next = 0;
    } else if (i === 1) {
      next = 1;
    } else {
      next = array[i - 2] + array[i - 1];
    }
    array.push(next);
  }
  return array;
}

function createFibonacciWithReduce(arrayLength) {
  const array = Array.from({ length: arrayLength }); //creates array with undefined values;
  return array.reduce((acc) => {
    let next;
    switch (acc.length) {
      case 0:
        next = 0;
        break;
      case 1:
        next = 1;
        break;
      default:
        next = acc[acc.length - 2] + acc[acc.length - 1];
    }
    acc.push(next);
    return acc;
  }, []);
}

function createFibonacciFrom(startIndex, arrayLength) {
  const newArray = createFibonacciWithReduce(arrayLength);
  return newArray.slice(startIndex);
}

console.log(createFibonacciWithForLoop(10));
console.log(createFibonacciWithReduce(10));
console.log(createFibonacciFrom(7, 15));


//new functions from the classwork insights:
function createFibonacciElementWithRecursive(x) {
  if (x <= 1) {
    return x;
  } else
    return (createFibonacciElementWithRecursive(x - 2) + createFibonacciElementWithRecursive(x - 1));
}

function createFibonacciElementWithRecursiveAndMemo(x, memorized = {}) {
  if (memorized[x] !== undefined) {
    return memorized[x];
  }
  if (x <= 1) {
    return x;
  }
  memorized[x] = createFibonacciElementWithRecursiveAndMemo(x - 2) + createFibonacciElementWithRecursiveAndMemo(x - 1);
  return memorized[x];
}

function createFibonacciSequenceWithRecursiveAndMemo(startIndex, arrayLength) {
  const array = [];
  for (let i = 0; i <= arrayLength; i++) {
    array.push(createFibonacciElementWithRecursiveAndMemo(i));
  }
  return array.slice(startIndex);
}

console.log(createFibonacciElementWithRecursive(13))
console.log(createFibonacciElementWithRecursiveAndMemo(13));
console.log(createFibonacciSequenceWithRecursiveAndMemo(4, 13));
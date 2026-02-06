const x = 3487;
const y = 3794;

function digitsMatchByValueAndPositionUsingLoop(x, y) {
  let count = 0;
  const arrayOfdigits1 = x.toString().split("");
  const arrayOfdigits2 = y.toString().split("");
  for (let i = 0; i < arrayOfdigits1.length; i++) {
    if (arrayOfdigits1[i] === arrayOfdigits2[i]) {
      count++;
    }
  }
  return count;
}

function digitsMatchByValueNotPositionUsingLoop(x, y) {
  let count = 0;
  const arrayOfdigits1 = x.toString().split("");
  const arrayOfdigits2 = y.toString().split("");
  for (let i = 0; i < arrayOfdigits1.length; i++) {
    if (
      arrayOfdigits1.includes(arrayOfdigits2[i]) &&
      arrayOfdigits1[i] !== arrayOfdigits2[i]
    ) {
      count++;
    }
  }
  return count;
}

function digitsMatchByValueAndPositionUsingFilter(x, y) {
  const arrayOfdigits1 = x.toString().split("");
  const arrayOfdigits2 = y.toString().split("");
  const matchedValues = arrayOfdigits1.filter(
    (digit) =>
      arrayOfdigits2.includes(digit) &&
      arrayOfdigits1.indexOf(digit) === arrayOfdigits2.indexOf(digit),
  );
  return matchedValues.length;
}

function digitsMatchByValueNotPositionUsingFilter(x, y) {
  const arrayOfdigits1 = x.toString().split("");
  const arrayOfdigits2 = y.toString().split("");
  const matchedValues = arrayOfdigits1.filter(
    (digit, index) =>
      arrayOfdigits2.includes(digit) && digit !== arrayOfdigits2[index],
  );
  return matchedValues.length;
}

console.log(digitsMatchByValueAndPositionUsingLoop(x, y));
console.log(digitsMatchByValueNotPositionUsingLoop(x, y));

console.log(digitsMatchByValueAndPositionUsingFilter(x, y));
console.log(digitsMatchByValueNotPositionUsingFilter(x, y));

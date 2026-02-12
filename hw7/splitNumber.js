function findSummandOfX(x) {
  return Math.round(Math.random() * x);
}

function splitX(x, summandsQty) {
  const summandsArray = [];
  for (let i = 1; i <= summandsQty; i++) {
    const summand = findSummandOfX(x);
    if (i !== summandsQty) {
      summandsArray.push(summand);
      x = x - summand;
    } else summandsArray.push(x);
  }
  return summandsArray;
}

//function with ternary operator wrapping it with iife:
function splitXTernary(x, summandsQty) {
  const summandsArray = [];
  for (let i = 1; i <= summandsQty; i++) {
    const summand = findSummandOfX(x);
    (() =>
      i === summandsQty
        ? summandsArray.push(x)
        : (summandsArray.push(summand), (x = x - summand)))();
  }
  return summandsArray;
}

console.log(splitX(100, 4));
console.log(splitXTernary(100, 6));
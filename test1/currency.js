import chalk from "chalk";

const myArr = ["1234","456","13","663475","0","-13",undefined,null,true,NaN,123,"abc","NaN"];

const FORMATTER = new Intl.NumberFormat("en-US", {style: "currency",currency: "USD"});

function convertNumToCurrency(number) {
  return FORMATTER.format(number);
}

//initial solution:
function convertArrayToCurrency1(array) {
  const newArr = [];
  for (const value of array) {
    const number = Number(value);
    if (typeof value === "string" && !Number.isNaN(number)) {
      newArr.push(convertNumToCurrency(number));
    } else {
      console.error(
        chalk.red(`Error: the value [${value}] is not a valid numeric string!`),
      );
    }
  }
  return newArr;
}

//solution with map() and filter():
function convertArrayToCurrency2(array) {
  return array.filter((value) => {
    const isValid = typeof value === "string" && !Number.isNaN(Number(value));
      if (!isValid) {
        console.error(chalk.red(`Error: the value [${value}] is not a valid numeric string!`));
      }
      return isValid;
    })
    .map((value) => convertNumToCurrency(value));
}

console.log(convertArrayToCurrency1(myArr));
console.log(convertArrayToCurrency2(myArr));
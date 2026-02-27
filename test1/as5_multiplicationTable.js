import chalk from "chalk";
import readline from "node:readline";

function isNaturalNumber(x) {
  return typeof x === "number" && Number.isInteger(x) && x > 0;
}

//solution #1 (with throwing errors):
function printMultiplicationTableWithThrowingErrors(N = 10) {
  try {
    if (!isNaturalNumber(N)) {
      throw new Error(
        `The argument [${N}] is not valid. Please, provide natural number`,
      );
    }
    const multipliers = [...Array(N).keys()].map((i) => i + 1);
    let sumOfRows = [];
    let sumOfColumns = Array(N).fill(0);
    let totalSum = 0;

    for (let i = 1; i <= multipliers.length; i++) {
      //count the multiplication table:
      let results = multipliers.map((number) => number * i);
      console.log(`${i} | `, ...results);
      //count sum of rows:
      let sumOfRow = results.reduce((total, number) => (total += number), 0);
      sumOfRows.push(sumOfRow);
      //count sum of columns:
      for (let col = 0; col < results.length; col++) {
        sumOfColumns[col] += results[col];
      }
      //count total sum of table:
      totalSum += sumOfRow;
    }
    console.log(`Sum of Rows: `, ...sumOfRows);
    console.log(`Sum of Columns: `, ...sumOfColumns);
    console.log(`Total Sum of Table: `, totalSum);
  } catch (err) {
    console.error(chalk.red(`Error: ${err.message}`));
  }
}

console.log("/========= Solution 1 (with throwing errors): =========/");
printMultiplicationTableWithThrowingErrors(13);
printMultiplicationTableWithThrowingErrors("abc");
printMultiplicationTableWithThrowingErrors(NaN);

//solution #2 (with reading from console):
async function askForNaturalNumber() {
  const readlineIF = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  while (true) {
    const input = await new Promise((resolve) => {
      readlineIF.question("Please provide a valid natural number:", resolve);
    });
    const number = Number(input);
    if (isNaturalNumber(number)) {
      console.log(chalk.green("Success! Natural number received:", number));
      readlineIF.close();
      return number;
    }
    console.log(chalk.red("Invalid! Try again."));
  }
}

async function printMultiplicationTableWithReadLine(max = 10) {
  if (!isNaturalNumber(max)) {
    max = await askForNaturalNumber();
  }
  const multipliers = [...Array(max).keys()].map((i) => i + 1);
  let sumOfRows = [];
  let sumOfColumns = Array(max).fill(0);
  let totalSum = 0;

  for (let i = 1; i <= multipliers.length; i++) {
    //count the multiplication table:
    let results = multipliers.map((number) => number * i);
    console.log(`${i} | `, ...results);
    //count sum of rows:
    let sumOfRow = results.reduce((total, number) => (total += number), 0);
    sumOfRows.push(sumOfRow);
    //count sum of columns:
    for (let col = 0; col < results.length; col++) {
      sumOfColumns[col] += results[col];
    }
    //count total sum of table:
    totalSum += sumOfRow;
  }
  console.log(`Sum of Rows: `, ...sumOfRows);
  console.log(`Sum of Columns: `, ...sumOfColumns);
  console.log(`Total Sum of Table: `, totalSum);
}

console.log("/========= Solution 2 (with reading from console): =========/");
await printMultiplicationTableWithReadLine(8);
await printMultiplicationTableWithReadLine(0.7);
await printMultiplicationTableWithReadLine(-13);

import chalk from "chalk";

function isNaturalNumber(x) {
  return typeof x === "number" && Number.isInteger(x) && x > 0;
}

function multuplicationTable(N = 10) {
  try {
    if (!isNaturalNumber(N)) {
      throw new Error(`The argument [${N}] is not valid. Please, provide natural number`);
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

multuplicationTable(7);
multuplicationTable(-13);
multuplicationTable(0.5);
multuplicationTable("abc");
multuplicationTable(NaN);
multuplicationTable(13);

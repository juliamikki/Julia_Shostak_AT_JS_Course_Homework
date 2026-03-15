import chalk from "chalk";

function createPromise(id: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      resolve(`Here is promise #${id}!`);
    } else reject(`Here is promise #${id}!`);
  });
}

async function run(funcArray: Promise<string>[]): Promise<void> {
  const results = await Promise.allSettled(funcArray);
  results.forEach((result, index) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    result.status === "fulfilled"
      ? console.log(`Promise ${index + 1} is ${result.status} : ${chalk.green(result.value)}`)
      : console.log(`Promise ${index + 1} is ${result.status} : ${chalk.red(result.reason)}`);
  });
}

run([
  createPromise(2),
  createPromise(5),
  createPromise(3),
  createPromise(4),
  createPromise(1),
]);

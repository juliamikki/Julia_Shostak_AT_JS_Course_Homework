import chalk from "chalk";

function randomTimeout(min = 1, max = 5) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const promise1 = new Promise((resolve) => {
  const timeout = randomTimeout();
  setTimeout(() => {
    resolve(`Return 1 after ${timeout} seconds`);
  }, timeout * 1000);
});

const promise2 = new Promise((resolve) => {
  const timeout = randomTimeout();
  setTimeout(() => {
    resolve(`Return 2 after ${timeout} seconds`);
  }, timeout * 1000);
});

const promise3 = new Promise((resolve) => {
  const timeout = randomTimeout();
  setTimeout(() => {
    resolve(`Return 3 after ${timeout} seconds`);
  }, timeout * 1000);
});

Promise.race([promise1, promise2, promise3]).then((result) => {
  console.log("The fist resolved promise:");
  console.log(chalk.green(result));
});

//method-checker:
Promise.all([promise1, promise2, promise3]).then((results) => {
  console.log("All promises:");
  results.forEach((result) => {
    console.log(chalk.green(result));
  });
});

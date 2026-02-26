import chalk from "chalk";
import { getRandom } from "./random.js";

function createPromise(id) {
  return new Promise((resolve) => {
    const timeout = getRandom();
    setTimeout(() => {
      resolve(`Return ${id} after ${timeout} seconds`);
    }, timeout * 1000);
  });
}

const promises = [1, 2, 3].map(createPromise);

Promise.race(promises)
  .then((result) => {
    console.log("The fist resolved promise:");
    console.log(chalk.green(result));
  })
  .catch((err) => console.error(err));

//method-checker:
Promise.all(promises)
  .then((results) => {
    console.log("All promises:");
    results.forEach((result) => {
      console.log(chalk.green(result));
    });
  })
  .catch((err) => console.error(err));

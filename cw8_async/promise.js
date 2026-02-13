import chalk from "chalk";

// promise statuses:
// -> <pending> - initial state, the operation is still running, not fillfilled or rejected
// -> <fulfilled> - the operation completed successfully
// -> <rejected> - the operation failed

// then() -> the function executed when the promise is fulfilled; receives the result.
// catch() -> the function that handles exceptions.
// finally() -> for the clean up; passes result or error to subsequent handlers.

const x = 1;

new Promise((resolve, reject) => {
  if (x < 0.5) {
    reject("Failure");
  } else {
    setTimeout(() => {
      resolve("Success after 2 seconds"); //resolve return the function result and pass to next then()
    }, 2000);
  }
})
  .then((result) => {
    console.log(chalk.green(result)); //the result from resolved is printed to console
    return "Success Youhoo!"; //the return string passed to the next then()
  })
  .then((successStr) => {
    console.log(`Previous operation result : ${successStr}`);
  })
  .catch((err) => console.error(chalk.red(err)))
  .finally(() => {
    console.log("Promise is settled (fulfilled or rejected)"); // always printed (regardless of the result)
  });

Promise.resolve("Immediate success!").then((result) => {
  console.log(chalk.green(result));
});

Promise.reject("Immediate failure!").catch((err) => {
  console.error(chalk.red(err));
});

async function main() {
  setTimeout(() => {
    console.log("Hello from async function!");
  }, 1000);
}

main();

async function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function asyncFunc(min = 3, max = 10) {
  const random = await getRandom(min, max);
  const promise = await new Promise((resolve, reject) => {
    if (random >= 5) {
      setTimeout(() => {
        resolve(`Random number ${random} is greater then or equal to 5!`);
      }, random * 100);
    } else {
      setTimeout(() => {
        reject(`Random number ${random} is less than 5!`);
      }, random * 100);
    }
  });
  // .then((result) => console.log(chalk.green(result))) -> the results and exceptions are handled later with Promise API methods
  // .catch((err) => console.log(chalk.red(err)));
  return promise;
}

// asyncFunc();

// -> Promise.all() -> waits for all promises to be resolved, if any rejects -> rejects immediately; (all or nothing)
Promise.all([asyncFunc(), asyncFunc(), asyncFunc(), asyncFunc()])
  .then((results) => {
    console.log("All promises fulfilled:");
    results.forEach((result, index) =>
      console.log(`Promise ${index + 1} is fulfilled: ` + chalk.green(result)),
    );
  })
  .catch((err) => {
    console.error("At least one promise is rejected:");
    console.error(chalk.red(err));
  });

// -> Promise.allSettled() -> waits for all promises to settle, regardless of fulfilled or rejected; never reaches the catch()
Promise.allSettled([asyncFunc(), asyncFunc(), asyncFunc(), asyncFunc()])
  .then((results) => {
    console.log("All promises settled:");
    results.forEach((result, index) => {
      const _ = result.status === "fulfilled"
          ? console.log(`Promise ${index + 1} is ${result.status}: ${result.value}`)
          : console.log(`Promise ${index + 1} is ${result.status}: ${result.reason}`);
    });
  })
  .catch((err) => {
    console.error("This will NEVER run!"); //Promise.allSettled() never rejects.
    console.error(err);
  });

// -> Promise.race() -> waits for the first settled promise and returns the result (fullfilled or rejected)
Promise.race([asyncFunc(), asyncFunc(), asyncFunc(), asyncFunc()])
  .then((result) => {
    console.log("First promise fulfilled:");
    console.log(chalk.green(result));
  })
  .catch((err) => {
    console.error("First promise rejected:");
    console.log(chalk.red(err));
  });

// -> Promise.any() -> waits for the first SUCCESSFULLY settled promise and returns the fullfilled result,
// either rejects -> if only all promises are rejected
Promise.any([asyncFunc(1, 6),asyncFunc(1, 6),asyncFunc(1, 6),asyncFunc(1, 6)])
  .then((result) => {
    console.log("One promise fulfilled:"); //the first successful promise
    console.log(chalk.green(result));
  })
  .catch((err) => {
    console.error("All promises rejected:");
    console.log(chalk.red(err)); //AggregateError object stores the errors of all promises
  });
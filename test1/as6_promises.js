function getRandom(min = 1, max = 10) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function squareNumber(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * number);
    }, 3000);
  });
}

new Promise((resolve) => {
  setTimeout(() => {
    const number = getRandom();
    console.log("First number:", number);
    resolve(number);
  }, 3000);
})
  .then(squareNumber)
  .then((result) => {
    console.log("Squared number:", result);
    return squareNumber(result);
  })
  .then((result) => {
    console.log("Fouth power number:", result);
  })
  .catch((err) => console.error("Something went wrong:", err.message));

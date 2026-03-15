function getRandom(min: number = 1, max: number = 10): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function squareNumber(number: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * number);
    }, 3000);
  });
}

new Promise<number>((resolve) => {
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

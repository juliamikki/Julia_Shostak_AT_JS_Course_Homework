function getRandom(min = 1, max = 10) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//solution #1:
new Promise((resolve) => {
  setTimeout(() => {
    const number = getRandom();
    console.log("First number:", number);
    resolve(number);
  }, 3000);
}).then((result) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const squared = result * result;
      console.log("Squared number:", squared);
      resolve(squared);
    }, 3000);
  }).then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const fourthPower = result * result;
        console.log("Fouth power number:", fourthPower);
        resolve(fourthPower);
      }, 3000);
    });
  });
});

//solution #2 (scquareNumber func incapsulated):
function squareNumber(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const squared = number * number;
      resolve(squared);
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
  .then((result) => {
    return squareNumber(result);
  })
  .then((result) => {
    console.log("Squared number:", result);
    return squareNumber(result);
  })
  .then((result) => {
    console.log("Fouth power number:", result);
  });
import { getRandom } from "./random.js";

function getNum(min, max, timeoutInSeconds) {
  const random = getRandom(min, max);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Random numnber:", random);
      resolve(random);
    }, timeoutInSeconds * 1000);
  });
}

async function addNumbers() {
  const number1 = await getNum(1, 5, 3);
  const number2 = await getNum(6, 10, 5);
  return console.log("Sum of numbers:", number1 + number2);
}

addNumbers();

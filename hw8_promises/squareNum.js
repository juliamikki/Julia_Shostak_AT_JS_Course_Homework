import { getRandom } from "./random.js";

function getNum() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const random = getRandom(1, 5);
      console.log("Random numnber:", random);
      resolve(random);
    }, 3000);
  });
}

async function squareNum() {
  const number = await getNum();
  return console.log("Squared number:", number * number);
}

squareNum();

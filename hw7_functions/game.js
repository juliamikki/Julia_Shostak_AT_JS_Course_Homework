//Math.floor() -> округление в меньшую сторону
//Math.random() -> число с плавающей запятой от 0 (включительно) до 1 (не включая)

function rollDice() {
  return Math.floor(Math.random() * (7 - 1) + 1);
}

function rollDiceWithRetries(numberOfTries) {
  const results = [];
  for (let i = 0; i < numberOfTries; i++) {
    results.push(rollDice());
  }
  return results;
}

function game(numberOfPlayers, numberOfTries) {
  const playersTries = [];
  let sumOfPlayersTries = [];
  for (let i = 0; i < numberOfPlayers; i++) {
    playersTries.push(rollDiceWithRetries(numberOfTries));
  }
  playersTries.forEach((player) => {
    const sum = player.reduce((acc, number) => acc + number, 0);
    sumOfPlayersTries.push(sum);
  });
  const sortedArray = sumOfPlayersTries.sort((a, b) => b - a);

  return sortedArray[0] === sortedArray[1]
    ? `Draw!`
    : `The winner has ${sortedArray[0]}!`;
}

console.log("/============= Initial solution (with arrays): =============/");
console.log(game(20, 6));
console.log(game(5, 2));

function game2(numberOfPlayers, numberOfTries) {
  const players = [];
  for (let i = 1; i <= numberOfPlayers; i++) {
    const tries = rollDiceWithRetries(numberOfTries);
    let player = {
      name: `Player ${i}`,
      tries: [...tries],
      sumOfTries: tries.reduce((acc, number) => acc + number, 0),
    };
    players.push(player);
  }
  const playersBySum = [...players].sort((a, b) => b.sumOfTries - a.sumOfTries);
  console.log(playersBySum);

  return playersBySum[0].sumOfTries === playersBySum[1].sumOfTries
    ? `Draw!`
    : `${playersBySum[0].name} won the game! The sum of dice rolls is ${playersBySum[0].sumOfTries}.`;
}

console.log("/============= Upgraded solution (with objects): =============/");
console.log(game2(2, 6));
console.log(game2(10, 3));
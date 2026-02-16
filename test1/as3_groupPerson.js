const myArr = [
  { name: "Julia", age: 32 },
  { name: "Sergey", age: 34 },
  { name: "Platon", age: 1 },
  { name: "Vlad", age: 18 },
  { name: "Victoria", age: 18 },
  { name: "Edward", age: 34 },
  { name: "Robert", age: 1 },
  { name: "Vasilisa", age: 1 },
];

//solution #1 (group using Map):
function groupPersonsByAge(arrayOfObjects) {
  const map = new Map();
  for (const person of arrayOfObjects) {
    if (!map.has(person.age)) {
      map.set(person.age, [person.name]);
    } else {
      map.get(person.age).push(person.name);
    }
  }
  return Object.fromEntries(map);
}

//solution #1 (group using Map)_upgraded:
function groupPersonsByAgeUpd(arrayOfObjects) {
  const map = new Map();
  for (const { name, age } of arrayOfObjects) {
    if (!map.has(age)) {
      map.set(age, [name]);
    } else {
      map.get(age).push(name);
    }
  }
  return Object.fromEntries(map);
}

//solution #2 (group using reduce()):
function groupPersonsByAgeWithReduce(arrayOfObjects) {
  return arrayOfObjects.reduce((acc, { age, name }) => {
    if (!acc[age]) {
      acc[age] = [];
    }
    acc[age].push(name);
    return acc;
  }, {});
}

console.log(groupPersonsByAge(myArr));
console.log(groupPersonsByAgeUpd(myArr));
console.log(groupPersonsByAgeWithReduce(myArr));
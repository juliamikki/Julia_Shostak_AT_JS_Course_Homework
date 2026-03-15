interface Person {
  name: string;
  age: number;
}

interface GroupedPersonsByAge {
  [key: string]: string[];
}

const myArr: Person[] = [
  { name: "Julia", age: 32 },
  { name: "Sergey", age: 34 },
  { name: "Platon", age: 1 },
  { name: "Vlad", age: 18 },
  { name: "Victoria", age: 18 },
  { name: "Edward", age: 34 },
  { name: "Robert", age: 1 },
  { name: "Vasilisa", age: 1 },
];

//solution #1 (group with Map):
function groupPersonsByAgeWithMap(arrayOfObjects: Person[]): GroupedPersonsByAge {
  console.log("/========= Solution 1: =========/");
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

//solution #1 (group with Object):
function groupPersonsByAgeWithObject(arrayOfObjects: Person[]): GroupedPersonsByAge {
  console.log("/========= Solution 2: =========/");
  const result: GroupedPersonsByAge = {};
  for (const { name, age } of arrayOfObjects) {
    if (!result[age]) {
      result[age] = [];
    }
    result[age].push(name);
  }
  return result;
}

//solution #3 (group using reduce()):
function groupPersonsByAgeWithReduce(arrayOfObjects: Person[]): GroupedPersonsByAge {
  console.log("/========= Solution 3: =========/");
  return arrayOfObjects.reduce<GroupedPersonsByAge>((acc, { age, name }) => {
    if (!acc[age]) {
      acc[age] = [];
    }
    acc[age].push(name);
    return acc;
  }, {});
}

console.log(groupPersonsByAgeWithMap(myArr));
console.log(groupPersonsByAgeWithObject(myArr));
console.log(groupPersonsByAgeWithReduce(myArr));

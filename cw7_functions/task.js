let array = [
  { name: "a", width: "10", height: "12" },
  { name: "b", width: "12", height: "14" },
  { name: "a", width: "15", height: "11" },
];

function findSquare(array) {
  return array.map((element) => ({
    name: element.name,
    square: element.width * element.height,
  }));
}

function findSquareWithThreeAgruments(array) {
  return array.map(({ name, width, height }) => ({
    name: name,
    square: width * height,
  }));
}

console.log(findSquare(array));
console.log(findSquareWithThreeAgruments(array));

const users = [
  {
    name: "John",
    email: "Jogn@mail.com",
  },
  {
    name: "Nick",
    email: "Nick84@gmail.com",
  },
  {
    name: "Alex",
    email: "Alex123@gmail.com",
  },
  {
    name: "Bob",
    emal: "bb11@gmail.com",
  },
  {
    name: "Jan",
    emal: "Jan@gmail.com",
  },
];

function findUsersWithA(users) {
  return users.filter((user) => user.name.toLowerCase().includes("a"));
}

console.log(findUsersWithA(users));
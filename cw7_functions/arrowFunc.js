const arrowFunction = () => {
  return "arrow function";
};

console.log(arrowFunction());

const arr = [10, 20, 30, 40, 50];
const newArr = arr.map((item) => item * 2);
const newArrUsual = arr.map(function (item) {
  return item * 2;
});

console.log(arr);
console.log(newArr);
console.log(newArrUsual);

const person = {
  name: "Yauhen",
  surname: "Beletsky",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayHelloArrow() {
    console.log(`Hello, ${this.surname}!`);
  },
};

person.sayHello();
person.sayHelloArrow();

console.log(add(20, 30))

function add(x, y) {
    return x + y;
}

console.log(add(5, 10))

console.log(add.call(null, 20, 30))
console.log(add.apply(null, [20, 30]))
const bindAdd = add.bind(null, 20, 30)
console.log(bindAdd())


//console.log(substract(20))
const substract = function fibbonachi(x) {
    return x <= 1 ? x : fibbonachi(x - 1) + fibbonachi(x - 2);
}

console.log(substract(15))


function multiply(x, y) {
    console.log(arguments)
    let sum = 1;
    for (let i = 0; i < arguments.length; i++) {
        sum *= arguments[i]
    }
    return sum;
}  
console.log(multiply(5, 10, 15, 20, 30, 40))

function multiply1(x, y, ...numbers) {
    console.log(numbers)
    let sum = x * y;
    for (let i = 0; i < numbers.length; i++) {
        sum *= numbers[i];
    }
    return sum;
}  

console.log(multiply1(5, 10, 15, 20, 30, 40))
console.log(multiply1(5, 10))

function sayHello(type, bye, name = 'Guest') {
    return `${type}, ${name}! ${bye}`;
}

console.log(sayHello('Hello', 'Goodbye'))
console.log(sayHello('Hey', 'See you later', 'Yauhen'))
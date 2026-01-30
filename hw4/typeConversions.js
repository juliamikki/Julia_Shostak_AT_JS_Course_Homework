const string = "Julia";
const convertableString = "100";
const boolean = true;
const number = 13;
const booleanObject = new Boolean(false);

function addition(x, y) {
    const z = x + y;
    console.log(`${typeof x} (${x}) + ${typeof y} (${y}) = ${z}`)
}

function multiplication(x, y) {
    const z = x * y;
    console.log(`${typeof x} (${x}) * ${typeof y} (${y}) = ${z}`)
}

function division(x, y) {
    const z = x / y;
    console.log(`${typeof x} (${x}) / ${typeof y} (${y}) = ${z}`)
}

function conversion(x) {
    console.log(`Original value: ${x} | type: ${typeof x}`);

    const asNumber = Number(x);
    console.log(`Converted to number: ${asNumber} | type: ${typeof asNumber}`);
    const asString = String(x);
    console.log(`Converted to string: ${asString} | type: ${typeof asString}`);
    const asBoolean = Boolean(x);
    console.log(`Converted to boolean: ${asBoolean} | type: ${typeof asBoolean}\n`);
}

addition(string, boolean);
addition(string, number);
addition(number, boolean);
console.log(""); 
multiplication(string, boolean);
multiplication(convertableString, boolean);
multiplication(string, number);
multiplication(convertableString, number);
multiplication(number, boolean);
console.log(""); 
division(string, boolean);
division(convertableString, boolean);
division(string, number);
division(convertableString, number);
division(number, booleanObject);
console.log(""); 
conversion(number);
conversion(string);
conversion(boolean);
conversion(booleanObject);
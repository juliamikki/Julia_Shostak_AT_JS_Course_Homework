import { expect } from "chai";
import { Calculator } from "./Calculator";

describe("Calculator tests", function () {
  const x = 5;
  const y = 10;
  const array = [x, y, 0, 15];

  const calc = new Calculator();

  //?
  beforeAll(async () => {
    console.log("before tests");
  });

  afterAll(async () => {
    console.log("after tests");
  });

  test.each([
    [13, 17, 30],
    [-10, -5, -15],
    [-13, 6, -7],
    [0, 0, 0],
  ])("should add %i and %i to get %i", (x, y, sum) => {
    expect(calc.add(x, y)).to.equal(sum);
  });

  test.each([
    [[13, 17, 10], 40],
    [[-10, -5, -15], -30],
    [[-13, 6, -7], -14],
    [[0, 0, 0], 0],
    [[], 0],
  ])("should add values %p to get %i", (terms, sum) => {
    expect(calc.add(...terms)).to.equal(sum);
  });

  test("should return 0 when no arguments are passed", () => {
    expect(calc.add()).to.equal(0);
  });

  test.each([
    [6, 8, 48],
    [-10, -5, 50],
    [-13, 11, -143],
    [888, 0, 0],
  ])("should multiply %i and %i to get %i", (x, y, product) => {
    expect(calc.multiply(x, y)).to.equal(product);
  });

  test.each([
    [[6, 8, 5], 240],
    [[-10, -5, -5], -250],
    [[-13, 11, -10], 1430],
    [[888, 777, 0], 0],
    [[], 1],
  ])("should multiply values %p to get %i", (multipliers, product) => {
    expect(calc.multiply(...multipliers)).to.equal(product);
  });

  test("should return 1 when no arguments are passed", () => {
    expect(calc.multiply()).to.equal(1);
  });

  test.each([
    [5, 20, 15],
    [20, 5, -15],
    [-11, -13, -2],
    [0, 13, 13],
  ])("should subtract %i from %i to get %i", (y, x, difference) => {
    expect(calc.subtraction(x, y)).to.equal(difference);
  });

  test.each([
    [72, 8, 9],
    [25, -5, -5],
    [0, -133, 0],
    [333, 0, Infinity],
    [-55, 0, -Infinity],
  ])("should divide %i by %i to get %s", (x, y, quotient) => {
    expect(calc.divide(x, y)).to.equal(quotient);
  });

  test("should divide 0 by 0 to get NaN", () => {
    expect(calc.divide(0, 0)).to.be.NaN;
  });

  test.each([
    [6, 36],
    [-10, 100],
    [0, 0],
  ])("should square %i to get %i", (x, square) => {
    expect(calc.exponentiation(x)).to.equal(square);
  });
});

import { expect } from "chai";
import { findSquare, findUsersWithA, getPromise } from "../cw9_jest/feature.js";

describe("My first test suite", function () {
  const array = [
    { name: "a", width: "10", height: "12" },
    { name: "b", width: "12", height: "14" },
    { name: "c", width: "15", height: "11" },
    { name: "d", width: "16", height: "12" },
    { name: "e", width: "19", height: "14" },
  ];

  beforeAll(async () => {
    console.log("I am running before all tests");
  });

  beforeEach(async () => {
    console.log("I am running before EACH test");
  });

  afterAll(async () => {
    console.log("I am running after all tests");
  });

  afterEach(async () => {
    console.log("I am running after EACH test");
  });

  test("true should be equal to true", () => {
    console.log("I am test");
    expect(true).to.be.true;
  });

  test.each([
    { value: "Success", timeout: 300 },
    { value: "Not", timeout: 250 },
    { value: "Hello", timeout: 250 },
  ])("should return promise with options %p", async ({ value, timeout }) => {
    const result = await getPromise(value, timeout);
    expect(result).to.be.equal(value);
  });

  test.each([
    ["Success 1", 300],
    ["Not 2", 250],
    ["Hello 3", 250],
  ])("should return promise %s with options %i", async (value, timeout) => { 
    const result = await getPromise(value, timeout);
    expect(result).to.be.equal(value);
  });
});

//-> %s - string placeholder
//-> %i - integer placeholder
//-> %p - pretty-print object/array/etc

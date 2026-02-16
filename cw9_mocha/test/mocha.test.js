import { expect } from "chai";
import { findSquare, getPromise } from "../mocha.feature.js";

describe("My first test suite", function () {
  const array = [
    { name: "a", width: "10", height: "12" },
    { name: "b", width: "12", height: "14" },
    { name: "c", width: "15", height: "11" },
    { name: "d", width: "16", height: "11" },
    { name: "e", width: "19", height: "11" },
  ];

  before(async () => {
    console.log("I am running before All tests");
  });

  beforeEach(async () => {
    console.log("I am running before EACH test");
  });

  after(async () => {
    console.log("I am running after All tests");
  });

  afterEach(async () => {
    console.log("I am running after EACH test");
  });

  it("true should be equal to true", () => {
    expect(true).to.be.true;
  });

  it("should be square in new objects", () => {
    const newArr = findSquare(array);
    newArr.forEach((obj) => {
      expect(obj).to.have.all.keys("name", "square");
    });
  });

  it("should be the same length", () => {
    const newArr = findSquare(array);
    expect(array.length).to.equal(newArr.length);
  });

  it("should return promise after 3 seconds", async () => {
    const result = await getPromise("Success", 3000);
    expect(result).to.equal("Success");
  });
});

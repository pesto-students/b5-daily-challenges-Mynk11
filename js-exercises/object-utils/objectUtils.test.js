import { map, filter, invert } from "./objectUtils";

// write your own test cases

describe("Map For Object", () => {
  it("Map through object", () => {
    const obj = {
      a: 10,
      b: 20,
      e: 30
    };

    expect(map(obj, ([key, val]) => [key.toUpperCase(), val * 10])).toEqual({
      A: 100,
      B: 200,
      E: 300
    });
  });
});

describe("filter operations", () => {
  it("filter object on the basis of keys or values", () => {
    const testDataObj = {
      1: 40,
      2: 10,
      3: 40,
      4: 70
    };

    expect(filter(testDataObj, ([key, val]) => val === 40)).toEqual({
      1: 40,
      3: 40
    });
  });
});
describe("Invert an object", () => {
  it("Invert an object", () => {
    const testDataObj = {
      "1": "40",
      "2": "10"
    };

    console.log("Invert Object--->", invert(testDataObj));

    expect(invert(testDataObj)).toEqual({
      "40": "1",
      "10": "2"
    });
  });
});

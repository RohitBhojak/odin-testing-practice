import analyzeArray from "../src/analyzeArray.js";

test("test 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("test 2", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6, 9])).toStrictEqual({
    average: 33 / 7,
    min: 1,
    max: 9,
    length: 7,
  });
});

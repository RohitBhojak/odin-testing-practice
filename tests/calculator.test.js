import calculator from "../src/calculator.js";

test("add", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("add", () => {
  expect(calculator.add(1, 2.3)).toBeCloseTo(3.3);
});

test("add", () => {
  expect(calculator.add(1, -7)).toBe(-6);
});

test("subtract", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("subtract", () => {
  expect(calculator.subtract(3, 2.3)).toBeCloseTo(0.7);
});

test("subtract", () => {
  expect(calculator.subtract(3, -2.3)).toBeCloseTo(5.3);
});

test("multiply", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("multiply", () => {
  expect(calculator.multiply(2, 2.3)).toBeCloseTo(4.6);
});

test("multiply", () => {
  expect(calculator.multiply(-2, 2.3)).toBeCloseTo(-4.6);
});

test("divide", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test("divide", () => {
  expect(calculator.divide(-4, 2)).toBeCloseTo(-2);
});

test("divide by zero", () => {
  expect(() => calculator.divide(3, 0)).toThrow("Cannot divide by zero");
});

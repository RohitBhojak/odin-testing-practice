import capitalize from "../src/capitalize.js";

test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize", () => {
  expect(capitalize("WORLD order")).toBe("WORLD order");
});

test("Empty string", () => {
  expect(capitalize("")).toBe("");
});

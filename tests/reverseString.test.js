import reverseString from "../src/reverseString.js";

test("reverseString", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverseString", () => {
  expect(reverseString("WORLD order")).toBe("redro DLROW");
});

test("Empty string", () => {
  expect(reverseString("")).toBe("");
});

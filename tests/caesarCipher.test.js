import caesarCipher from "../src/caesarCipher.js";

test("test 1", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("test 2", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("test 3", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("test 4", () => {
  expect(caesarCipher("@@ a @@", 27)).toBe("@@ b @@");
});

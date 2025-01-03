import { add } from "./StringCalculator";

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number for a single input", () => {
  expect(add("1")).toBe(1);
});

test("returns the sum for two numbers", () => {
  expect(add("1,5")).toBe(6);
});

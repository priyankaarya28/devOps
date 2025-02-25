const { sum, multiply } = require("./math");

test("2 + 3 = 5", () => {
  expect(sum(2, 3)).toBe(5);
});

test("2 * 3 = 6", () => {
  expect(multiply(2, 3)).toBe(6);
});

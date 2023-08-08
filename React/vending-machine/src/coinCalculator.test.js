import requiredCoins from "./coinCalculator";

test("should return 0 when given 0", () => {
  const result = requiredCoins(0);
  expect(result).toEqual({ quarters: 0, dimes: 0, nickels: 0 });
});

test("should return 1 dime when given 10", () => {
  expect(requiredCoins(10)).toEqual({ quarters: 0, dimes: 1, nickels: 0 });
});

test("should return 1 quarter when given 25", () => {
  expect(requiredCoins(25)).toEqual({ quarters: 1, dimes: 0, nickels: 0 });
});

test("should return 1 nickel when given 5", () => {
  expect(requiredCoins(5)).toEqual({ quarters: 0, dimes: 0, nickels: 1 });
});

test("should return 2 quarters when given 50", () => {
  expect(requiredCoins(50)).toEqual({ quarters: 2, dimes: 0, nickels: 0 });
});

test("should return correct change for 140", () => {
  expect(requiredCoins(140)).toEqual({ quarters: 5, dimes: 1, nickels: 1 });
});

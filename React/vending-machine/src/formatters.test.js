import formatAsCurrency from "./formatters";

test("format to USD", () => {
  expect(formatAsCurrency(0)).toBe("$0.00");
});

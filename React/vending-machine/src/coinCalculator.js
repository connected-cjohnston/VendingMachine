export default function requiredCoins(amount) {
  const coins = { quarters: 0, dimes: 0, nickels: 0 };
  console.log("requiredCoins start...");

  while (amount >= 5) {
    if (amount >= 25) {
      coins.quarters++;
      amount -= 25;
    } else if (amount >= 10) {
      coins.dimes++;
      amount -= 10;
    } else if (amount >= 5) {
      coins.nickels++;
      amount -= 5;
    }
    console.log("amount: ", amount);
  }

  console.log("...requiredCoins end");

  return coins;
}

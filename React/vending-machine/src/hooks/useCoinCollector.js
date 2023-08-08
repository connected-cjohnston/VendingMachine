import { useState, useEffect } from "react";
import requiredCoins from "../coinCalculator";

function useCoinCollector(initialCoins) {
  const [enoughChange, setEnoughChange] = useState(true);
  const [coins, setCoins] = useState(initialCoins);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const neededCoins = requiredCoins(amount);
    const enoughChange =
      coins.quarters >= neededCoins.quarters &&
      coins.dimes >= neededCoins.dimes &&
      coins.nickels >= neededCoins.nickels;

    setEnoughChange(enoughChange);
  }, [coins, amount]);

  return { enoughChange, setCoins, setAmount };
}

export default useCoinCollector;

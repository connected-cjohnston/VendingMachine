defmodule CoinVault do
  @initial_coins %{quarters: 0, dimes: 0, nickels: 0}

  def decompose(0), do: @initial_coins

  def decompose(amt) when amt > 0 do
    decompose(amt, @initial_coins)
  end

  defp decompose(amt, %{quarters: quarters} = coins) when amt >= 25 do
    decompose(amt - 25, %{coins | quarters: quarters + 1})
  end

  defp decompose(amt, %{dimes: dimes} = coins) when amt >= 10 do
    decompose(amt - 10, %{coins | dimes: dimes + 1})
  end

  defp decompose(amt, %{nickels: nickels} = coins) when amt >= 5 do
    decompose(amt - 5, %{coins | nickels: nickels + 1})
  end

  defp decompose(_amt, coins) do
    coins
  end
end

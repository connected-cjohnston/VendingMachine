defmodule CoinVaultTest do
  use ExUnit.Case
  doctest CoinVault

  test "should return 0 coins when given 0" do
    coins = CoinVault.decompose(0)
    assert coins == %{quarters: 0, dimes: 0, nickels: 0}
  end

  test "should return 1 quarter when given 25" do
    coins = CoinVault.decompose(25)
    assert coins == %{quarters: 1, dimes: 0, nickels: 0}
  end

  test "should return 1 dime when given 10" do
    coins = CoinVault.decompose(10)
    assert coins == %{quarters: 0, dimes: 1, nickels: 0}
  end

  test "should return 1 nickel when given 5" do
    coins = CoinVault.decompose(5)
    assert coins == %{quarters: 0, dimes: 0, nickels: 1}
  end

  test "should return 2 quarters when given 50 cents" do
    coins = CoinVault.decompose(50)
    assert coins == %{quarters: 2, dimes: 0, nickels: 0}
  end
end

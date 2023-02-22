# frozen_string_literal: true

# describes a product that the vending machine sells
class Product
  attr_reader :name, :price

  def initialize(name, price)
    @name = name
    @price = price
  end
end

# Describes a vending machine that accepts coins to return products
class VendingMachine
  attr_accessor :total, :display_text

  MONEY = {
    quarter: 25,
    dime: 10,
    nickel: 5
  }

  PRODUCTS = {
    cola: Product.new(:cola, 100),
    chips: Product.new(:chips, 50),
    candy: Product.new(:candy, 65)
  }

  def initialize
    @total = 0
    @display_text = 'INSERT COIN'
  end

  def accept_coin(coin)
    return if coin == :penny

    self.total += MONEY[coin]

    self.display_text = sprintf('%.2f', total / 100.00)
  end

  def select_item(selection)
    item = PRODUCTS[selection]

    if total == item.price
      self.display_text = 'THANK YOU'
      item.name
    else
      self.display_text = "PRICE #{sprintf('%0.2f', item.price / 100.00)}"
      nil
    end
  end

  def display
    display_text
  end

  def coin_return
    :penny
  end
end

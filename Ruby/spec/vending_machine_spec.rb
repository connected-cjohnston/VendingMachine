require './src/vending_machine'

RSpec.describe VendingMachine do
  subject { VendingMachine.new }

  describe 'inserting coins' do
    it 'should display INSERT COIN when no coins have been inserted' do
      expect(subject.display).to eq('INSERT COIN')
    end

    it 'should display 0.25 when a quarter is inserted' do
      subject.accept_coin(:quarter)
      expect(subject.display).to eq('0.25')
    end

    it 'should display 0.10 when a dime is inserted' do
      subject.accept_coin(:dime)
      expect(subject.display).to eq('0.10')
    end

    it 'should display 0.05 when a nickel is inserted' do
      subject.accept_coin(:nickel)
      expect(subject.display).to eq('0.05')
    end

    it 'should display the total when multiple coins are inserted' do
      subject.accept_coin(:dime)
      subject.accept_coin(:quarter)

      expect(subject.display).to eq('0.35')
    end

    it 'should reject pennies' do
      subject.accept_coin(:penny)
      expect(subject.display).to eq('INSERT COIN')
      expect(subject.coin_return).to eq(:penny)
    end
  end

  describe 'selecting item' do
    it 'should return nothing when cola is selected and no money is inserted' do
      result = subject.select_item(:cola)
      expect(result).to eq(nil)
      expect(subject.display).to eq("PRICE 1.00")
    end

    it 'should return a cola when selected and given enough change' do
      subject.accept_coin :quarter
      subject.accept_coin :quarter
      subject.accept_coin :quarter
      subject.accept_coin :quarter

      result = subject.select_item :cola

      expect(result).to eq(:cola)
      expect(subject.display).to eq('THANK YOU')
    end

    it 'should return chips when selected and total is 0.50' do
      subject.accept_coin :quarter
      subject.accept_coin :quarter

      result = subject.select_item :chips

      expect(result).to eq(:chips)
      expect(subject.display).to eq('THANK YOU')
    end

    it 'should return candy when selected and total is 0.65' do
      subject.accept_coin :quarter
      subject.accept_coin :quarter
      subject.accept_coin :dime
      subject.accept_coin :nickel

      result = subject.select_item :candy

      expect(result).to eq(:candy)
      expect(subject.display).to eq('THANK YOU')
    end

    it 'should display the price when an item is selected and not enough money is given' do
      subject.accept_coin :quarter
      result = subject.select_item :candy
      expect(result).to eq(nil)
      expect(subject.display).to eq('PRICE 0.65')
    end
  end
end

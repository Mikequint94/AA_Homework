require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef", name: "Umphrey") }
  let(:brownie) {Dessert.new("brownie", 100, "chef")}

  describe "#initialize" do
    it "sets a type" do
      expect(brownie.type).to eq("brownie")
    end

    it "sets a quantity" do
      expect(brownie.quantity).to eq(100)
    end

    it "starts ingredients as an empty array" do
      expect(brownie.ingredients).to eq([])
    end

    it "raises an argument error when given a non-integer quantity" do
        expect {Dessert.new("Brownie", "loads", chef)}.to raise_error(ArgumentError)
    end

  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      brownie.add_ingredient("lemons")
      expect(brownie.ingredients).to include("lemons")
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      ingredients = ["lemons", "coconut", "ginger", "beans"]
      brownie.add_ingredient("lemons")
      brownie.add_ingredient("coconut")
      brownie.add_ingredient("ginger")
      brownie.add_ingredient("beans")
      expect(brownie.ingredients).to eq(ingredients)
      brownie.mix!
      expect(brownie.ingredients).not_to eq(ingredients)
      expect(brownie.ingredients.sort).to eq(ingredients.sort)
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      brownie.eat(10)
      expect(brownie.quantity).to eq(90)
    end
    it "raises an error if the amount is greater than the quantity" do
      #brownie.eat(110)
      expect{brownie.eat(110)}.to raise_error
    end


  end


  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return("Chef Umphrey the Great Baker")
      expect(brownie.serve).to eq("Chef has made 100 brownies!")
    end

  end

  describe "#make_more" do
    let(:chef2) { double("chef2", name: "Umphrey") }
    let(:brownie) {Dessert.new("brownie", 100, chef2)}
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef2).to receive(:bake).with(brownie)
      brownie.make_more
    end
  end
end

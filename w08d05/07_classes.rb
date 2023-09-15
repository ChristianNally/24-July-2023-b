# properties in an object can be private, readable, writable, or readable and writable
class Car
  def initialize(make, model, year)
    @make = make
    @model = model
    @year = year
  end

  # attr_reader(:model)
  # attr_writer(:model)
  attr_accessor(:year, :model, :make)

  # def make # getter
  #   @make
  # end

  # def make= (new_make) # setter
  #   @make = new_make
  # end
end

my_car = Car.new('Toyota', 'Tercel', 1986)

p my_car

puts my_car.make
my_car.make = 'Pontiac'

p my_car

puts my_car.model
my_car.model = 'Firebird'

p my_car

puts my_car.year
my_car.year = 2009

p my_car

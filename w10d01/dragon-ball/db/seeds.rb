# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "running the seeds"

puts "creating the planets"

20.times do
  Planet.create(
    name: Faker::JapaneseMedia::DragonBall.planet
  )
end

puts "retrieving the new planets"

planets = Planet.all

puts "creating the characters"

50.times do
  Character.create(
    name: Faker::JapaneseMedia::DragonBall.character,
    race: Faker::JapaneseMedia::DragonBall.race,
    planet: planets.sample
  )
end

puts "all done!"

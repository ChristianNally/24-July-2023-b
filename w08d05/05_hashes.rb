# hash => collection of key/value pairs, dictionaries, associative arrays
# cannot contain methods

user = {
  "username" => "jstamos",
  "password" => "1234"
}

# puts user["username"]
# user["username"] = 'something else'
# user["phone_number"] = 46823648263

# puts user

# symbol => lightweight string (as close to a primitive as we can get in Ruby)

user = {
  :username => 'jstamos',
  :password => '1234'
}

# puts user
# p user[:username]

user = {
  username: 'jstamos',
  password: '1234'
}

puts user

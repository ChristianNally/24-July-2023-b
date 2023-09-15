# block is denoted with do..end
# Proc(edure) is a block stored in memory (callback)

names = ['Alice', 'Bob', 'Carol']

# names.each do |name|
#   puts "hi there #{name}"
# end

# new Proc
my_proc = Proc.new do |name|
  puts "hi there #{name}"
end

# names.each &my_proc

# [1,2,3,4].each &my_proc

def accepting_block &block
  block.call()
end

def accepting_invis_block 
  yield # block.call(), callback()
end

accepting_invis_block do
  puts "inside the invisible block"
end

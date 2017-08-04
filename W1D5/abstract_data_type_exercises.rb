#exercise 1 - Stack

class Stack
  def initialize
    @stack = []
  end

  def add(el)
    @stack << el
  end

  def remove
    @stack.pop
  end

  def show
    p @stack
  end
end

# new_stack = Stack.new
# new_stack.add(4)
# new_stack.add(8)
# new_stack.show
# new_stack.add(15)
# new_stack.add(16)
# new_stack.show
# new_stack.remove
# new_stack.show
# new_stack.add(23)
# new_stack.show

#exercise 2 - queue

class Queue
  def initialize
    @queue = []
  end
  def enqueue(el)
    @queue << el
  end
  def dequeue
    @queue.shift
  end
  def show
    p @queue
  end
end

# new_stack = Queue.new
# new_stack.enqueue(4)
# new_stack.enqueue(8)
# new_stack.show
# new_stack.enqueue(15)
# new_stack.enqueue(16)
# new_stack.show
# new_stack.dequeue
# new_stack.show
# new_stack.enqueue(23)
# new_stack.show

#exercise 3 - map

class Map
  def initialize
    @map = []
  end
  def assign(key, value)
      remove(key)
      @map << [key, value]
  end
  def lookup(key)
    @map.each do |el|
      return el if el[0] == key
    end
    return false
  end
  def remove(key)
    @map.delete(lookup(key)) if lookup(key)
  end
  def show
    p @map
  end
end

# my_map = Map.new
# my_map.show
# my_map.assign(:oceanic, 815)
# my_map.show
# my_map.assign(:delta, 224)
# my_map.show
# my_map.assign(:delta, 1000)
# my_map.show
# my_map.remove(:oceanic)
# my_map.show

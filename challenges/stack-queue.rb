# Create a stack. Then create a queue using two stacks.

require "test/unit"

class Stack

  attr_reader :cache, :index

  def initialize(*args)
    @cache = args
    @index = args.length
  end

  def push(el)
    @cache[@index] = el
    @index += 1
    @cache
  end

  def pop
    return nil if @index == 0
    @index -= 1
    popped_el = @cache[@index]
    @cache.delete_at(@index)
    popped_el
  end

  def empty?
    @index == 0
  end
end

class Queue
  def initialize(*args)
    @in_stack = Stack.new
    @out_stack = Stack.new

    args.each { |el| @in_stack.push el }
  end

  def in_stack
    @in_stack.cache
  end

  def out_stack
    @out_stack.cache
  end

  def enqueue(el)
    @in_stack.push el
    nil
  end

  def dequeue
    if @out_stack.empty?
      while !@in_stack.empty?
        @out_stack.push @in_stack.pop
      end
    end
    
    @out_stack.pop
  end
end

# --- tests ---
class TestStackQueue < Test::Unit::TestCase

  def setup
    @stack = Stack.new
    @queue = Queue.new
  end

  def test_1
    @stack.push(0);
    assert_equal(0, @stack.pop(), "should push elements to stack")
  end

  def test_2
    @stack.push(1);
    @stack.push(2);
    assert_equal(2, @stack.pop(), "should pop most recently pushed elements")
    assert_equal(1, @stack.pop(), "should pop most recently pushed elements")
  end

  def test_3
    assert_equal(nil, @stack.pop(), "should return nil when popping empty stack")
    @stack.push(0);
    @stack.push(1);
    assert_equal(1, @stack.pop(), "should pop most recently pushed elements")
    assert_equal(0, @stack.pop(), "should pop most recently pushed elements")
  end


  def test_4
    @queue.enqueue(0);
    assert_equal(0, @queue.dequeue(), "should push elements to queue")
  end

  def test_5
    @queue.enqueue(1);
    @queue.enqueue(2);
    assert_equal(1, @queue.dequeue(), "should dequeue item enqueued first")
    assert_equal(2, @queue.dequeue(), "should dequeue final item")
  end

  def test_6
    assert_equal(nil, @queue.dequeue(), "should return nil when dequeuing empty queue")
    @queue.enqueue(0);
    @queue.enqueue(1);
    assert_equal(0, @queue.dequeue(), "should still dequeue properly after dequeuing on nil")
    assert_equal(1, @queue.dequeue(), "should still dequeue properly after dequeuing on nil")
  end

end

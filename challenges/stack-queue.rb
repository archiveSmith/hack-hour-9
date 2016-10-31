# Create a stack. Then create a queue using two stacks.

require "test/unit"

class Stack

end

class Queue

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

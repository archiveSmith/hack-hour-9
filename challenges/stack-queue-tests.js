const expect = require('chai').expect;
const stackQueue = require('./stack-queue');

const Stack = stackQueue.Stack;
const Queue = stackQueue.Queue;

var stack;
var queue;

describe('Stack', function() {
  beforeEach(function() {
    stack = new Stack();
  });


  describe('push method', function() {


    it('should add elements to the stack', function() {
      stack.push(3);
      expect(stack.storage.length).to.equal(1);
    });
  });

  describe('pop method', function() {
    it('should return undefined if the stack is empty', function() {
      expect(stack.pop()).to.be.undefined;
    });

    it('should return a truthy value if the stack is not empty', function() {
      stack.push(1);
      expect(stack.pop()).to.be.truthy;
    });
  });
});

describe('Queue', function() {
  beforeEach(function() {
    queue = new Queue();
  });

  describe('enqueue method', function() {
    it('should add items to the queue', function() {
      queue.enqueue(3);
      expect(queue.storage.storage.length).to.equal(1);
    });
  });

  describe('dequeue method', function() {
    it('should dequeue the first added element', function() {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.dequeue()).to.equal(1);
      expect(queue.dequeue()).to.equal(2);
      expect(queue.dequeue()).to.equal(3);
    });

    it('should return undefined if the queue is empty', function() {
      expect(queue.dequeue()).to.be.undefined;
    });
  });
});

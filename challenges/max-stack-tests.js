const expect = require('chai').expect;
const Stack = require('./max-stack');



describe('Stack', function() {
  let stack;

  beforeEach(function() {
    stack = new Stack();
  });

  describe('constructor', function() {
    it('Should create an object with values and max properties', function() {
      expect(stack.values).to.be.an.instanceOf(Array);
      expect(stack.max).to.be.undefined;
    });
  });

  describe('push method', function() {
    it('should add an element to the stack', function() {
      stack.push(5);
      expect(stack.values.length).to.equal(1);
      stack.push(6);
      expect(stack.values.length).to.equal(2);
    });

    it('should update the max property', function() {
      expect(stack.max).to.be.undefined;

      stack.push(5);
      expect(stack.max).to.equal(5);

      stack.push(6);
      expect(stack.max).to.equal(6);
    });

    it('should return the new length of the stack', function() {
      expect(stack.push(5)).to.equal(1);
      expect(stack.push(6)).to.equal(2);
    });
  });

  describe('pop method', () => {
    it('should decrease the length by one', function() {
      stack.push(3);
      stack.push(4);
      expect(stack.values.length).to.equal(2);

      stack.pop();
      expect(stack.values.length).to.equal(1);
    });

    it('should return the removed value', function() {
      stack.push(3);
      stack.push(4);
      expect(stack.pop()).to.equal(4);
    });

    it('should update the max property if the max value was popped', function() {
      stack.push(3);
      expect(stack.max).to.equal(3);
      stack.push(4);
      expect(stack.max).to.equal(4);

      stack.pop();
      expect(stack.max).to.equal(3);
    });

    it('should return undefined if the stack is empty', function() {
      expect(stack.pop()).to.be.undefined;
    });
  });

  describe('getMax method', function() {
    it('should return undefined if the stack is empty', function() {
      expect(stack.getMax()).to.be.undefined;
    });

    it('should return the max value if there are values in the stack', function() {
      stack.push(4);
      stack.push(3);
      expect(stack.getMax()).to.equal(4);
    });

    it('should return the max value if the previous max value was popped off the stack', function() {
      stack.push(3);
      stack.push(4);
      expect(stack.getMax()).to.equal(4);

      stack.pop();
      expect(stack.getMax()).to.equal(3);
    });

    it('should return the correct max value if the max occurs twice and then one of them is popped off', function() {
      stack.push(3);
      stack.push(4);
      stack.push(2);
      stack.push(4);
      expect(stack.getMax()).to.equal(4);

      stack.pop();
      expect(stack.getMax()).to.equal(4);
    });
  });
})

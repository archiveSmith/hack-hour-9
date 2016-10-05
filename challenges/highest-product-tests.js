const highestProduct = require('./highest-product');

function assert(condition) {
  if (!condition) throw new Error();
}

// Edge case checks
assert(highestProduct([]) === 0);
assert(highestProduct([1]) === 0);
assert(highestProduct([1, 2]) === 0);

// Working examples
assert(highestProduct([1, 1, 1]) === 1);
assert(highestProduct([1, 1, 2]) === 2);
assert(highestProduct([1, 1, 2, 3]) === 6);
assert(highestProduct([1, 1, 2, -3]) === 2);
assert(highestProduct([1, 1, 1, 1, 1, 1, 1, 3, 3, 3]) === 27);

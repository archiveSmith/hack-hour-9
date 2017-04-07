/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 * ex reapeatNumber([1,2,3,1,4]) => 1
 * question: what should repeatNumber([1,2,3]) return ?
 */

// coding challenge tips
// keys to success:
// 1. pattern recognition
// 2. comparing to previous problem exposure
// 3. understanding time and space complexity


// “If I had an hour to solve a problem I'd spend
// 55 minutes thinking about the problem
// and 5 minutes thinking about solutions.”
//         -some smart dude

// how to solve:
// indentify what the problem is asking
// whiteboard
// develop a strategy
// think about possible computational methods:
// looping, recursion, object orientation, mathematical, string manipulation, etc..
// consider edge cases
// code solution that works anyway you can do it
// test
// optimize
// rejoice



// just do it strategy
const repeatNumber1 = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array.indexOf(array[i]) !== i) return array[i];
  }
  return false;
};
// O(n^2) time complexity
// O(1) space complexity



// remember previous items strategy
const repeatNumber2 = (array) => {
  const store = {};
  for (let i = 0; i < array.length; i += 1) {
    if (store[array[i]]) return array[i];
    store[array[i]] = true;
  }
  return false;
};
// O(n) time complexity (sweet!)
// O(n) space complexity (dang)




// math strategy
// note: if a math based solution is possible, always use it!
const repeatNumber3 = (array) => {
  let sum = 0;
  const expected = ((array.length) * (array.length + 1)) / 2;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  if (sum !== expected) {
    return sum - (((array.length - 1) * (array.length)) / 2);
  }
  return false;
};
// O(n) time complexity
// O(2) space complexity (better!)
// can we do any better?


// use specifics of the problem to optimize strategy
const repeatNumber4 = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
    sum -= i + 1;
    if (sum !== 0) return array[i];
  }
  return false;
};
// O(n) time complexity
// O(1) space complexity
// this is a brittle solution, it works only in this specific case
// there are tradeoffs in performance vs resusabillity



repeatNumber4();
repeatNumber1();
repeatNumber2();
repeatNumber3();

/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

// function countStairs(n) {
//   return n >= 0 ? (n === 0 ? 1 : 0) : (countStairs(n - 1) + countStairs(n - 2));
//   // return n >= 0 ?
//   //   n === 0 ?
//   //     1
//   //     : 0
//   //   : countStairs(n - 1) + countStairs(n - 2);

// }
const countStairs = (function () {
  const cache = { '0': 1, '1': 1 };
  function fib(n) {
    if (n < 0) return 0;
    if (cache[n]) return cache[n]
    cache[n] = fib(n - 1) + fib(n - 2)
    return cache[n]
  }
  return fib
})();
module.exports = countStairs;

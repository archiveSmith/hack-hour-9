/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const argString = JSON.stringify(args);
    if (cache[argString] === undefined) {
      cache[argString] = fn(...args);
    }
    return cache[argString];
  };
}
const countStairs = memoize((n) => {
  if (n === 0) return 1;
  if (n === 1) return 1;
  if (n === 2) return 2;
  return countStairs(n - 2) + countStairs(n - 1);
});

module.exports = countStairs;

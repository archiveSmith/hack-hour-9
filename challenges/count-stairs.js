/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

const countStairs = memoize((n) => 
  n <= 1 ?
    1 :
    countStairs(n - 1) + countStairs(n - 2));


function memoize(f) {
  const memo = {};

  return function (...args) {
    const argString = JSON.stringify(args);
    if (memo[argString] === undefined) {
      memo[argString] = f(...args);
    }

    return memo[argString];
  }
}

module.exports = countStairs;

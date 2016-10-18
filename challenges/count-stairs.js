/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n, cur = 0) {
  if (cur > n) return 0;
  if (cur === n) return 1;
  return countStairs(n, cur + 1) + countStairs(n, cur + 2)
}

module.exports = countStairs;

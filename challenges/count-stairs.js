/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
//slowest all 1's
//fastest all 2's
//all permutations of 1's and twos that are less than n
//find all two arrays, find unique permutations of those
  if (n === 1) return 1;
  if (n === 2) return 2;
  return countStairs(n - 2) + countStairs(n - 1);
}

module.exports = countStairs;

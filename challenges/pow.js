/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // All numbers to the power of 0 equal 1
  if (power === 0) return 1;

  // Base Case. Start rebuilding when power = 1
  if (power === 1) return base;

  // Recursive call, keep
  return pow(base, power - 1) * base;
}

pow(2,3);

module.exports = pow;

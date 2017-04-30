/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, total = 1) {
  if (power === 0) return total;
  return pow(base, power - 1, total * base);
}

module.exports = pow;

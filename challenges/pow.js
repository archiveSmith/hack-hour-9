/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, res = 1) {
  if (power <= 0) return 1;
  if (power == 0) return res;
  else {
    return pow(base, power - 1, res * base)
  }
}

module.exports = pow;

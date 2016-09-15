/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let sign = 1
    //edge cases
  if (a < 0 & b > 0) {
    return undefined;
  } else
  if (b < 0 & a > 0) {
    return undefined;
  } else
  if (a < 0 & b < 0) {
    a = Math.abs(a)
    b = Math.abs(b)
    sign = -1
  } else
  if (a === 0 || b === 0) {
    return 0;
  }
  let min = Math.min(a, b)
  for (let i = min; i > 0; i--) {
    if (a % i === 0 & b % i === 0) {
      return i * sign;
    }
  }
  
}

module.exports = gcd;

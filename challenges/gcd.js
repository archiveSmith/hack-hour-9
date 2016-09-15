/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let larger = Math.max(a, b);
  let smaller = Math.min(a, b);
  let div = larger % smaller;

  return div === 0 ? smaller : gcd(div, smaller);

};

console.log(gcd(100000000000002, 100000000000004))
module.exports = gcd;
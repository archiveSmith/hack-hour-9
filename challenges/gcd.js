/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  if (a === b) return a;
  let diff = max - min;
  for (var i = diff; i > 0; i--) {
    if (a % i === 0 && b % i === 0) return i
  }
}

module.exports = gcd;
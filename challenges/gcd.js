/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // non recursive working in the same manner
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
  // if (!b) return a;
  // return gcd(b, a % b);
}

console.log(gcd(10, 100000000000000));


module.exports = gcd;
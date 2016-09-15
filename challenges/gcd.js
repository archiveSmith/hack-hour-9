/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let hash = {}
  for (var i = a; i >= 0; i--) {
    if (a % i == 0) {
      hash[i] = i;
    }
  }

  for (var i = b; i >= 0; i--) {
    if (b % i == 0) {
      if (hash[i]) {
        console.log(i);
        return i;
      }
    }
  }

};

gcd(60, 90)
module.exports = gcd;
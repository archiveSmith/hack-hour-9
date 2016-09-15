/**
 * Given two integers, return the greatest common divisor.
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (a % b === 0) {
    return Math.abs(b);
  } else if (b % a === 0) {
    return Math.abs(a);
  }
  const newA = Math.abs(a);
  const newB = Math.abs(b);
  const diff = Math.max(newA, newB) - Math.min(newA, newB);
  for (let i = diff; i > 0; i--) {
    if (newA % i === 0 && newB % i === 0) return i;
  }
}

// test data
console.log(gcd(10, 8), '= 2');
console.log(gcd(10, 9), '= 1');
console.log(gcd(10, -5), '= 5');
console.log(gcd(-10, -20), '= 10');
console.log(gcd(9, 5), '= 1');

module.exports = gcd;

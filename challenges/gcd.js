/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const lower = a < b ? a : b;
  const higher = a < b ? b : a;
  const mid = Math.floor(lower / 2);
  let greatestDenominator = 1;

  if (higher % lower === 0) return lower;

  for (let i = 2; i <= mid; i++) {
    if (lower % i === 0 && higher % i === 0) {
      greatestDenominator = i;
    }
  }

  return greatestDenominator;
}

module.exports = gcd;

// console.log(gcd(24, 6)); // 6
// console.log(gcd(44, 8)); // 4

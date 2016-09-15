/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

ffunction gcd(a, b) {
  if (a === b) return a;
  if (a === 1) return 1;
  if (b === 1) return 1;

  let least = Math.min(a, b);
  let greatest = Math.max(a, b);
  let remainder = greatest % least;

 	return remainder === 0 ? least : gcd(remainder, least);

}

module.exports = gcd;
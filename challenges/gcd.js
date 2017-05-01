/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const afactors = [];
  if (a % 1 !== 0 || b % 1 !== 0) {
    return null;
  }
  neg = a < 0 || b < 0;
  if (neg) {
    a = Math.abs(a);
    b = Math.abs(b);
  }
  let end = a < b ? a : b;
  for (let i = 1; i < end; i++) {
    while ((a / i) % 1 === 0 && (b / i) % 1 === 0) {
      afactors.push(i);
      if (a / i === a) break;
      a = a / i;
      b = b / i;
    }
  }
  return afactors.reduce((memo, factor) => memo * factor);

}

module.exports = gcd;
/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcdold(a, b) {
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
function gcd2(a, b) {
  const [max, min] = [Math.max(a, b), Math.min(a, b)];
  if (max % min === 0) return min;
  return gcd2(min, max % min);
}
function gcd3(a, b) {
  if (a % b === 0) return b;
  if (b % a === 0) return a;
  return a >= b ? gcd3(b, a % b) : gcd3(a, b % a);
}
function gcd4(a, b) {
  return a % b === 0 || b & a === 0 ?
    Math.min(a, b)
    :
    a <= b ?
      gcd4(a, b % a)
      :
      gcd4(b, a % b);
}
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}
module.exports = gcd;
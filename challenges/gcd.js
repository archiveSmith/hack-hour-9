/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let num = 1;
  let largestNum = Math.max(a,b);
  let smallestNum = Math.min(a,b);

  for (let i = 1; i < largestNum; i++) {
    if (largestNum % i === 0 && smallestNum % i === 0 && i > num) {
      num = i;
    }
  }
  return num;
}

console.log(gcd(10,5))

module.exports = gcd;

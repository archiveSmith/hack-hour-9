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
  let end = Math.sqrt(a) < Math.sqrt(b) ? Math.sqrt(a) : Math.sqrt(b);

  for (let i = 1; i < end; i++) {
    while (a % i === 0 && b % i === 0) {
      afactors.push(i);
      console.log("Before: \n","i: ", i ,"\na: ", a, "\nb: ", b)
      a = a / i;
      b = b / i;
      console.log("a: ", a, "\nb: ", b)
    }
  }

}

module.exports = gcd;
/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  var small, big;
  if (a === 0) {
    return b;
  }
  if (b === 0){
    return a;
  }
  if (Math.abs(a) > Math.abs(b)) {
    small = Math.abs(b);
    big = Math.abs(a);
  } else {
    small = Math.abs(a);
    big = Math.abs(b);
  }
  console.log('big: ', big, 'small: ', small);
  for (var i = small; i > 0; i--){
    if (big % i === 0 && small % i === 0){
      return i;
    }
  }
}

module.exports = gcd;
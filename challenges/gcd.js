/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  var higher;
  var lower;
  //determine which one's higher
  if (Math.abs(a)>Math.abs(b)){
    higher = a;
    lower = b;
  }
  else{ 
    higher = b;
    lower = a;
  }

  for(let i = Math.abs(lower); i >= 1; i--){
    if (higher % i === 0 && lower % i === 0){
      return i;
    }
  }
  return 'none found';
}


module.exports = gcd;
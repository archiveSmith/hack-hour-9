/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (a === b) return a;
  if ((typeof a !== 'number') || (typeof b !== 'number'))   
    return -1; 

  while(b) {  
    var c = b;  
    b = a % b;  
    a = c;
  } 
  return a;
}

module.exports = gcd;
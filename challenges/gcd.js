/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	let min = Math.min(Math.abs(a,b)); 
	while(min >= 0) {
		if(a % min === 0 && b % min === 0){
			return min; 
		}
		min--;
	}
	return min;
}

module.exports = gcd;
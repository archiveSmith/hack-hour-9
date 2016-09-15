/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {

	let dividend = Math.max(a, b);
	let divisor = Math.min(a, b);
	let remainder = dividend % divisor;
	
	return remainder === 0 ? divisor : gcd(remainder, divisor)
}

gcd(54, 24) 

module.exports = gcd;
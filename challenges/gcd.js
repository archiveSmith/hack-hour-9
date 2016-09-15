/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {

	let num = Math.max(a, b);
	let div = Math.min(a, b);
	let remain = num % div;

	return remain === 0 ? div : gcd(div, remain)
}

module.exports = gcd;
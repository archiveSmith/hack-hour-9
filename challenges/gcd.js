/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	let greaterNum;
	
	if(a > b) {
		greaterNum = a;
	}else {
		greaterNum = b;
	}
	
	const halfGreaterNum = Math.ceil(a / 2);
	
	for(let i = halfGreaterNum; i > 0; i--) {
		if (a % i === 0 && b % i === 0) {
			return i;
		}
	}
	return null;
}

module.exports = gcd;
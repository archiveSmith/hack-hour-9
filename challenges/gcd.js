/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	if(a % b === 0) {
		return b
	}

	if(b % a === 0) {
		return a;
	}

	let remain = a % b;
	let newRemain;
	let div = b;
	let ans;
	
	while(newRemain !== 0) {
		newRemain = div % remain;
		if(newRemain === 0) {
			ans = remain;
		}
		div = remain;
		remain = newRemain;
	}

	return ans;
}

module.exports = gcd;
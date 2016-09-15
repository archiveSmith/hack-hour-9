/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	
	// input checks
	if(!a || Number.isNaN(a) || !b || Number.isNaN(b) ) {
		return;
	}
	
	// find the min of a,b - common divisor cannot be greater than min of a,b
	var minArg = Math.min(a, b);
	minArg = Math.abs(minArg); // get the absolute value of min to account for negative a,b
	
	// track greatest common divisor
	var maxDivisor = 1;
	
	// check from 1 to minArg for common divisor
	for(var i = 1; i <= minArg; i++) {
		if((a % i === 0) && (b % i === 0)) { // check divisible by both a and b
			maxDivisor = i; // if so, update maxDivisor
		}
	}
	return maxDivisor;
}

/* tests */
/*
console.log(gcd(10, 8)); // 2
console.log(gcd(10, 9)); // 1
console.log(gcd(4, 12)); // 4
console.log(gcd(48, 15)); // 3
console.log(gcd(48, -15)); // 3
console.log(gcd(-48, -15)); // 3
*/

module.exports = gcd;
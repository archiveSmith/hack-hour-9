/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	
	// base case - anything number raised to power of 0 is 1
	if(power === 0) {
		return 1;
	}
	
	// check if power is < 0 then it is equal to 1 / (base ^ power)
	if(power < 0) {
		return 1 / (pow(base, -1 * power));
	}
	
	// non base case - base number times result of pow() passing in power - 1
	return base * pow(base, power - 1);

}

/* test cases */
/*
console.log(pow(2,0));
console.log(pow(2,1));
console.log(pow(2,2));
console.log(pow(2,3));

console.log(pow(2,-1));
console.log(pow(2,-2));

console.log(pow(10,0));
console.log(pow(10,1));
console.log(pow(10,2));
console.log(pow(10,3));

console.log(pow(10,-1));
console.log(pow(10,-2));
console.log(pow(10,-3));
*/

module.exports = pow;

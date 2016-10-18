/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
	if(n === 0 || n === 1) {
		return 1;
	} else if (n < 0) {
		return 0;
	} 
	
	return countStairs(n - 1) + countStairs(n - 2);
}

/* tests */
/*
console.log(countStairs(0)); //1
console.log(countStairs(1)); //1
console.log(countStairs(2)); //2
console.log(countStairs(3)); //3
console.log(countStairs(4)); //5
console.log(countStairs(5)); //8
*/

module.exports = countStairs;

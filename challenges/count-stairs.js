/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
	if (n === 2) return 2;
	if (n === 1) return 1;

	return countStairs(n-1) + countStairs(n-2) + 2;
}

// recursive
// base cases: N === 2 , N === 1 where N = # of steps
// if N === 2, then return 2, if N === 1, return 1
// otherwise recur(N-2) + recur(n-1)


module.exports = countStairs;

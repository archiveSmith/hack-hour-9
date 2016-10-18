/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
	let least = Math.floor(n/2);
	let possible = 0
	for (var i = 0; i < least; i++){
		possible += fact(n-least*i);
	}
	return possible
}

function fact(x) {
   if(x==0) {
      return 1;
   }
   return x * fact(x-1);
}

module.exports = countStairs;

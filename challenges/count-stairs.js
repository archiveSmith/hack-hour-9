/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
return fib(n + 1);
}

function fib(x) {
   if (x <= 1) {
      return x;
   }
   return fib(x-1) + fib(x-2);
}


module.exports = countStairs;

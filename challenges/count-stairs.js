





/* You are faced by a staircase that is N steps high. 
* You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */




// function countStairs(n) {
//   return n >= 0 ? (n === 0 ? 1 : 0) : (countStairs(n - 1) + countStairs(n - 2));
//   // return n >= 0 ?
//   //   n === 0 ?
//   //     1
//   //     : 0
//   //   : countStairs(n - 1) + countStairs(n - 2);

// }


// const countStairs = (function () {
//   const cache = { '0': 1, '1': 1 };
//   function fib(n) {
//     if (n < 0) return 0;
//     if (cache[n]) return cache[n]
//     cache[n] = fib(n - 1) + fib(n - 2)
//     return cache[n]
//   }
//   return fib
// })();
// module.exports = countStairs;


const countStairs1 = (stairs) => {
  if (stairs < 0) return 0;
  if (stairs <= 1) return 1;
  return countStairs1(stairs - 1) + countStairs1(stairs - 2);
}
// but this is super super super slow
// it's really just fibonacci

// can we imporve? 

function memo(fn) {
  var store = {};
  return function (val) {
    if (store[val]) return store[val];
    else {
      var ans = fn(val);
      store[val] = ans;
      return ans;
    }
  };
}

const countStairs = (stairs) => {
  if (stairs < 0) return 0;
  if (stairs <= 1) return 1;
  return countStairs(stairs - 1) + countStairs(stairs - 2);
}
const countStairs2 = memo(countStairs);


// function tailOptimizedCountStairs(stairs, count = 1) {
//   if (stairs < 0) return 0;
//   if (stairs <= 1) return count;
//   return countStairs(stairs - 1, count )

// }







countStairs2()
countStairs()
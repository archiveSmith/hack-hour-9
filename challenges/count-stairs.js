/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  let ways = 0;
  let sumstairs = 0;
  function helper(sumstairs){
    if (sumstairs > n){
      return;
    }
    if (sumstairs === n){
      ways += 1;
      return sumstairs;
    }
    else if ((helper(sumstairs + 1) === n) || (helper(sumstairs + 2) === n)){
      return;
    } 
    return sumstairs;
  }
  helper(0);
  return ways;
}

module.exports = countStairs;

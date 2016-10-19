/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  let steps = [1, 2],
    arr = [],
    baseArr = [];

  for (var i = 0; i < n; i++) {
    baseArr.push(1)
  }

  for (var i = baseArr.length; i > 0; i--) {
    baseArr.splice(i,1,2)
    arr.push(baseArr);
  }

  console.log(arr);
  
}

console.log(countStairs(3));

let arrs = [ 1, 1, 1 ];
arrs.splice(0,1,2);
arrs.splice(1,1,2);

console.log(arrs);


module.exports = countStairs;
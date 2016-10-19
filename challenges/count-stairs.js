/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

'use strict';

function countStairs(n) {
  if (n <= 1) return 1;
  return countStairs(n - 1) + countStairs(n - 2);
}

// let count1 = countStairs(1);
// let count2 = countStairs(2);
// let count3 = countStairs(3);
// let count4 = countStairs(4);


module.exports = countStairs;



// function padWithZeros(string, length) {
//   let nString = string;

//   while (nString.length < length) {
//     nString = '0' + nString;
//   }

//   return nString;
// }

// function countStairs(n) {
//   let count = 0;
//   const binCombos = Math.pow(2, n);

//   if (!n) return 1;

//   for (let i = 0; i < binCombos; i++) {
//     const bin = padWithZeros(i.toString(2), n);
//     let steps = 0;

//     for (let j = 0; j < bin.length; j++) {
//       if (bin[j] === '0') steps += 1;
//       else steps += 2;
//     }

//     if (steps === n) count++;
//   }

//   return count;
// }

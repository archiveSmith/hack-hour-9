// Write a function "countTwos" that takes a number as an argument, n.
// The function will return the number of 2s encountered when counting
// from 1 to n (inclusive). 2222 counts as having 4 2s.

// console.log(countTwos(1)); //  -> 0
// console.log(countTwos(3)); //  -> 1
// console.log(countTwos(13)); // -> 2
// console.log(countTwos(1000)); // -> 300
// console.log(countTwos(110293712937212));  // -> 4483


function countTwos(num) {
  return Array.from({ length: num + 1 }, (el, index) => index)
    .reduce((a, b) => a.toString() + b.toString())
    .split('')
    .filter((el) => el === '2').length;
}

module.exports = countTwos;

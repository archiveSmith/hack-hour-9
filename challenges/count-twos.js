// Write a function "countTwos" that takes a number as an argument, n.
// The function will return the number of 2s encountered when counting
// from 1 to n (inclusive). 2222 counts as having 4 2s.

console.log(countTwos(1)); //  -> 0
console.log(countTwos(3)); //  -> 1
console.log(countTwos(13)); // -> 2
console.log(countTwos(1000)); // -> 300
console.log(countTwos(11420));  // -> 4483


function countTwos(num) {
  let twos = 0;
  for (let i = 0; i <= num; i++) {
    const numStr = i.toString();
    for (let j = 0; j < numStr.length; j++) if (numStr[j] === '2') twos++;
  }
  return twos;
}



module.exports = countTwos;
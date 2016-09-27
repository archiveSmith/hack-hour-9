// Write a function "countTwos" that takes a number as an argument, n.
// The function will return the number of 2s encountered when counting
// from 1 to n (inclusive). 2222 counts as having 4 2s.

console.log(countTwos(1)); //  -> 0
console.log(countTwos(3)); //  -> 1
console.log(countTwos(13)); // -> 2
console.log(countTwos(1000)); // -> 300
//console.log(countTwos(107653400376320956));  // -> 4483


function countTwos(num) {
  let twos = 0;
  for (let i = 0; i <= num; i++) {
    i.toString().replace(/2/g, () => {
      twos++;
    });
  }
  return twos;
}



module.exports = countTwos;
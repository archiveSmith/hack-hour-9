// Write a function "countTwos" that takes a number as an argument, n.
// The function will return the number of 2s encountered when counting
// from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos() {
  let counter = 0;
  for (let i = 0; i <= 107653400376320956; i++) {
    // let arr = JSON.stringify(i).split('');
    // arr.forEach((item) => {
    //   if (item == '2') {
    //     counter++;
    //   }
    // })
    counter++;
  }
  return counter;
}

console.log(countTwos());

module.exports = countTwos;

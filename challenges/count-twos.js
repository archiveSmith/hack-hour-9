// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when 
// counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let count = 0;
  for (let i = 0; i <= num; ++i) {
    const numString = i.toString();
    for (let j = 0; j < numString.length; ++j) {
      if (numString[j] === '2') {
        count++;
      }
    }
  }
  return count;
}


// function countTwos(num) {
//   let count = 0;
//   for (let i = 0; i <= num; ++i) {
//     count += checkTwos(i);
//   }
//   return count;
// }

// function checkTwos(num) {
//   let count = 0;
//   const numString = num.toString();
//   for (let j = 0; j < numString.length; ++j) {
//     if (numString[j] === '2') {
//       count++;
//     }
//   }
//   return count;
// }

// test cases
// console.log(countTwos(1000), 'should equal 300');
// console.log(countTwos(1), 'should equal 0');
// console.log(countTwos(3), 'should equal 1');
// console.log(countTwos(11420), 'should equal 4483');

module.exports = countTwos;
// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    let split = i.toString().split("").map(Number);
    count = split.reduce((sum, num) => {
    	return (num === 2) ? ++sum : sum
    }, 0)
    sum += count
  }
  return sum;
}

module.exports = countTwos;
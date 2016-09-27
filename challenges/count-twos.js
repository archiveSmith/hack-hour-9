// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let numStr;
  let count = 0;
  for (let i = 1; i <= num; i++) {
    numStr = i.toString();
    numStr = numStr.split("").reverse();
    if (numStr[0] === '2') {
      count++;
    }
    console.log(numStr.length)
    console.log(i)
    if (numStr.length > 1 && 10 ** (numStr.length - 1) * 2 === i) {
      console.log('hi')
      count++;
    }
  }
  return count;
}

countTwos(1000)


module.exports = countTwos;

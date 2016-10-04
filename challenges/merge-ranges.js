/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an
 * array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

//grab each array inside of the array
//sort from smallest to largest range
// for each array check the first number compared to all the other numbers

function mergeRanges(array) {
  let sortedArr = array;
  let newArr = [];

  sortedArr.sort((item1, item2) => {
    return item1[0] - item2[0];
  })

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i][1] >= sortedArr[i + 1][0]) {
      let tempArr = [sortedArr[i][0], sortedArr[i + 1][1]];
      newArr.push(tempArr);
    } else {
      newArr.push(sortedArr[i]);
    }
  }
  return sortedArr;

}

const times = [[3, 5], [0, 1], [4, 8], [10, 12], [9, 10]];
console.log(times)

console.log(mergeRanges(times));

module.exports = mergeRanges;

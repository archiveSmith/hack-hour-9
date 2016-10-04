/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  let cache = {};
  let unsortedArr = [];
  let sortedArr = [];
  let result = [];
  let newRange = [];

  array.forEach((range) => {
    range.forEach((time) => {
      unsortedArr.push(time);
    });
  });
  
  unsortedArr.sort((a,b) => { return a - b});
 
 for (let i = 0; i < unsortedArr.length; i++) {
 	// let tempArr = [];
 	if (unsortedArr[i+1] - unsortedArr[i] === 1) {
 		sortedArr.push(unsortedArr[i]);
 	} else if (unsortedArr[i+1] - unsortedArr[i] > 1) {
  		sortedArr.push(unsortedArr[i]);		
 	}
 	// result.push(tempArr);
 	console.log(unsortedArr);
 }

  return result;
}

mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]);

mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]);

module.exports = mergeRanges;

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
   array.sort((a, b) => a[0] - b[0]);

   let startTimes = [array[0][0]];
   let endTimes = [Math.max(...array.map(range => range[1]))];

   for (let i = 1; i < array.length; i++) {
   	if (array[i][0] > array[i - 1][1]) startTimes.push(array[i][0]);
   }
   for (let i = array.length - 2; i >= 0; i--) {
   	if (array[i][1] < array[i + 1][0]) endTimes.push(array[i][1]);
   }

   return zip(startTimes, endTimes.reverse());
 }

 function zip(arr1, arr2) {
 	return arr1.map((_, i) => {
 		return [arr1[i], arr2[i]];
 	});
 }

module.exports = mergeRanges;

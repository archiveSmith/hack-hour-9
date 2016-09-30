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


function mergeRanges(arr) {
	let sorted = arr.sort((a,b) => a[0] - b[0])
	let newArr = [];
	sorted.forEach((time,idx,array) => {
		let range = [...Array(time[1]+1).keys()].slice(time[0]);
		if (array[idx+1] && (range.includes(array[idx+1][0]) || range.includes([array[idx+1][1]]))){
			newArr.push([array[idx][0],array[idx+1][1]]);
			delete array[idx+1];
		 } else {
		 	newArr.push(time);
		 }
	})
	return newArr;
}


module.exports = mergeRanges;

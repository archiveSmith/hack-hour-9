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
	
	let merged = [];
	let curr;

	array = array.sort((a, b) => {
		return a[0] > b[0];
	});

	merged.push(array[0]);
	
	for (let i = 1; i < array.length; i++) {
		curr = array[i];
		if(curr[0] - merged[merged.length-1][1] > 0) {
			merged.push(curr);
		} else {
			merged[merged.length-1][1] = Math.max(curr[1], merged[merged.length-1][1]);
		}
	}
	
	return merged;
	
}


var times = [[0, 1], [3, 5], [4, 8], [6,7], [10, 12], [9, 10]];
mergeRanges(times)
//var times = [[3,5]];

module.exports = mergeRanges;

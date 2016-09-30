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

	//sort given array by first element in each subarray
	//iterate thru sorted array and check if the first element is contained in the previous subarray
	//if so, assign second element to the second element of previous array and continue;
	let sorted = [];
	sorted = array.sort(function(a, b) {return a[0] - b[0];});

	for (let i = 1; i < sorted.length; i++) {
		if (sorted[i - 1] && sorted[i][0] <= sorted[i-1][1]) {
			sorted[i-1][1] = sorted[i][1];
			delete sorted[i];
		}
	}
	
	let merged = [];
	for (let i = 0; i < sorted.length; i++){
		if (sorted[i]) merged.push(sorted[i]);
	}
	
	return merged;
}

module.exports = mergeRanges;

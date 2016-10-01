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
	
	// check edge cases - no array or empty array
	if((! array) || (array.length === 0)) {
		return;
	}
	
	// sort the ranges by start time
	array.sort(function(range1, range2) {
		if(range1[0] < range2[0]) {
			return -1;
		} else if(range1[0] > range2[0]) {
			return 1;
		} else {
			return 0;
		}
	});
	
	var output = [];
	var start = null;
	var end = null;
	
	for(var i = 0; i < array.length; ++i) {
		var range = array[i];
		
		//console.log('i', i, 'start', start, 'end', end, 'range[0]', range[0], 'range[1]', range[1]);
		
		if(end === null) { // need to initialize
			start = range[0];
			end = range[1];
		} else {
			if(range[0] >= start && range[0] <= end && range[1] >= start && range[1] <= end) {
				// current range within start and end, continue to next one
				continue;
			} else if(range[0] >= start && range[0] <= end && range[1] > end) {
				// update end with new value
				end = range[1];
			} else if(range[0] > end) {
				// push a completed range onto output and set start, end to current range
				output.push([start, end]);
				start = range[0];
				end = range[1];
				
			}
		}
	}
	
	output.push([start, end]);
	return output;
}
/*
var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

console.log(mergeRanges(times)); // -> [[0, 1], [3, 8], [9, 12]]

var times2 = [[0, 11], [9, 10], [3, 5]]; // --> [[0, 11]]

console.log(mergeRanges(times2)); // -> [[0, 1], [3, 8], [9, 12]]
*/

module.exports = mergeRanges;

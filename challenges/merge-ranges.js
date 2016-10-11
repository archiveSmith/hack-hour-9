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
	var sorted = array.sort(function(a,b){
		return a[0] - b[0];
	});
	
	var final = [];
	for (var i = 0; i < sorted.length; i++){
		if (final.length === 0) {
			final.push(sorted[0]);
		} else {
			if (sorted[i][0] > final[final.length-1][1]){
				final.push(sorted[i]);
			} else if (sorted[i][0] <= final[final.length-1][1]){
				final[final.length-1][1] = sorted[i][1];
			}
		}
	}
	return final;
}

module.exports = mergeRanges;

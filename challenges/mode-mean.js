/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

"use strict";
function modemean(array) {
	let sum = array.reduce((a, b) => {return a + b});
	let mean = Math.floor(sum / array.length);
	let freq = {};
	for (let num of array) {
		freq[num] = (freq[num] || 0) + 1;
	}
	let mode = freq[array[0]];
	for (var key in freq){
		if (freq[key] >= mode) {
			mode = key;
		}
	}
	return mean === mode;
}

module.exports = modemean;

/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 *  - Math.floor the mean
 *  - If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
	var mean = Math.floor((array.reduce(function(a, b) {
		return a + b;
	})) / array.length)
	var numCount = {};
	var freq = 0;
	var ans
	var mode = (array.forEach(function(item) {
			numCount[item] = (numCount[item] || 0) + 1;
			
			if(freq < numCount[item]) {
				freq = numCount[item];
				ans = item;
			}
		}))
	
	return mean == ans;
}


module.exports = modemean;

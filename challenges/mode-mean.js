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


function modemean(array) {
	let mean = 0;
	let mode = 0;
	let sum = 0;
	let freq = {};

	for(let i = 0; i < array.length; i++) {
		sum += array[i];
		// if number exists as key, increment it's value for each occurence
		if(freq[array[i]]){
			freq[array[i]] += 1;	
		}else{
			freq[array[i]] = 1;	
		}
	}

	mean = sum/array.length;
	// loop through freq, returning key with the highest value
	for(let num in freq) {
		if(freq[num] > mode) { mode = num };
	}

	return mode == mean;
}

module.exports = modemean;

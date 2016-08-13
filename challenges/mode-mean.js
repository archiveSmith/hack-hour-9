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
	let mode = 0;
	let mean = 0;
	let sum = 0;
	let obj = {};
	let max = 0;
	let arr = [];

	//find sum and store frequencies of values
	for (let i = 0; i < array.length; i++) {
		//update sum
		sum += array[i];
		 
		//store freq in obj
		if (!obj[array[i]]) {
			obj[array[i]] = 0;
		}
		obj[array[i]] += 1;
	}
	
	// get the highest frequency 
	for (let val in obj) {
		if (obj[val] >= max) {
			max = obj[val];
		}
	}
	
	// get all values that == max freq and store them in an array
	for (let val in obj) {
		if (obj[val] === max) {
			console.log('entered if');
			arr.push(Number(val));
		}
	}

	mode = Math.max(...arr);
	mean = Math.floor(sum/array.length);
	
	if (mode === mean) 
		return true;
	else return false;
}

module.exports = modemean;

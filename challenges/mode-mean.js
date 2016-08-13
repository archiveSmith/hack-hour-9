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
	let sum = array.reduce(function(prev, curr){
		return prev + curr;
	});
	let mean = Math.floor(sum / array.length);

	//get mean: assign quantity of each number as a value to its key
	let obj = {};
	array.forEach(function(num){
		!obj[num] ? obj[num] = 1 : obj[num] += 1;
	});

	let mode = 0;
	let quantity = 0;
	for (var key in obj) {
		if (obj[key] > quantity) {
			quantity = obj[key];
			mode = key;
		}
		if (obj[key] === quantity) {
			if (key > mode) {
				quantity = obj[key];
				mode = key;
			}
		}
	}

	//== operator for type conversion. compare mode and mean values.
	return mode == mean ? true: false;

}
console.log(modemean([3, 2, 1]));
module.exports = modemean;

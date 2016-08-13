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
	
	// mode is max frequency, use map to remember num of times seen this particular number
	var frequency = {};
	// keep track of highest frequency seen at this point
	var mode = 0;
	
	// mean is average = sum / num of elements
	var sum = 0;
	var numOfElements = array.length;
	
	// iterate through array to get accumulated sum, update map, and track mode
	for(var i = 0; i < array.length; i++) {
		sum += array[i];
		
		var val;
		
		if(frequency[array[i]] !== undefined) {
			// is in map, increment the value
			val = Number.parseInt(frequency[array[i]], 10);			
			frequency[array[i]] = ++val;
		} else { // not in map, add it with 1
			val = 1;
			frequency[array[i]] = val;
		}
		
		// update mode as needed
		if(val > mode) {
			mode = val;
		}
		
	}
	
	var mean = sum / numOfElements;
	
	return mode === mean? true: false;

}

//console.log(modemean([2,5,5,1,4,7])); // false
//console.log(modemean([2,2,1,1,3,3])); // true
//console.log(modemean([2,2,0,1,4,3])); // true

module.exports = modemean;

/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
	var output = [];
	
	var index1 = 0;
	var index2 = 0;
	
	while(index1 < arr1.length && index2 < arr2.length) {
		// do comparison
		if(arr1[index1] <= arr2[index2]) {
			// use arr1 value
			output.push(arr1[index1]);
			index1++;
		} else {
			// use arr2 value
			output.push(arr2[index2]);
			index2++;
		}
	}
	
	// one of the arrays is finished
	// arr2 done - append the rest of arr1 to output
	if(index1 < arr1.length) {
		output = output.concat(arr1.slice(index1));
	} else if(index2 < arr2.length) { // arr1 done - append the rest of arr2 to output
		output = output.concat(arr2.slice(index2));
	}
	
	return output;

}

/* tests */
/*
var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];

console.log(mergeArrays(my_array, another_array)); //-> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
*/
module.exports = mergeArrays;

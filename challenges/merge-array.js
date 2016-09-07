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
	array1 = arr1.slice();
	array2 = arr2.slice()
	if (array1.length === 0) return array2;
	if (array2.length === 0) return array1;
	if (!Array.isArray(array1) || !Array.isArray(array2)) return "Invalid inputs";
	let index = 0;
	while (array2.length !== 0) {
		let val = array2.shift();
		if (val < array1[index]) {
			array1.splice(index, 0, val);
		} else {
			while(val > array1[index]) {
				index++;	
			}
			array1.splice(index, 0, val);
		}
	}
	return array1;
}


module.exports = mergeArrays;

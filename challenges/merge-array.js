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
	if (arr1.length === 0) return arr2;
	if (arr2.length === 0) return arr1;
	if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid inputs";
	let index = 0;
	let index2 = 0;
	while (index2 !== arr2.length - 1) {
		let val = arr2[index2++];
		if (val < arr1[index]) {
			arr1.splice(index, 0, val);
		} else {
			while(val > arr1[index]) {
				index++;	
			}
			arr1.splice(index, 0, val);
		}
	}
	return arr1;
}


module.exports = mergeArrays;

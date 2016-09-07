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
	
	if(!arr1.length) return arr2;
	if(!arr2.length) return arr1;

	let arr1Index = 0;
	let arr2Index = 0;
	
	let mergedArr = [];
	let length =  arr1.length + arr2.length;
	
	while (mergedArr.length < length) {
		if (arr1[arr1Index] > arr2[arr2Index]) {
			mergedArr.push(arr2[arr2Index++]);
		} else {
			mergedArr.push(arr1[arr1Index++]);
		}
	}
	
	return mergedArr;
	

}

var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];

mergeArrays(my_array, another_array);

module.exports = mergeArrays;

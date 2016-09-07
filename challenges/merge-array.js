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
	let newArr = [];
	let loc1 = 0;
	let loc2 = 0;
	let totalElements = arr1.length + arr2.length - 1;
	
	for (let i = 0; i <= totalElements; i++){
		if(arr1[loc1] && arr2[loc2]){
			if(arr1[loc1] <= arr2[loc2]){
				newArr.push(arr1[loc1++]);
			} else{
				newArr.push(arr2[loc2++]);
			}
		} else if (arr1[loc1]) {
			newArr.push(arr1[loc1++]);
		} else{
			newArr.push(arr2[loc2++]);
		}
	}
	return newArr;
	
}


module.exports = mergeArrays;

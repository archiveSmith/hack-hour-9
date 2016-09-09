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

function mergeArrays(a = [],b = []){
if(!a.length && !b.length) return undefined;
if (!a.length){
	return b;
} else if (!b.length){
	return a;
}
var merged= [];
	while(a.length && b.length){
		if(b[0] <= a[0]) {
			merged.push(b[0]);
			b.shift();
			
		} else {
			merged.push(a[0]);
			a.shift();
		}
	}
	if (a.length) merged.push(...a);
	if (b.length) merged.push(...b)
	return merged;
}

module.exports = mergeArrays;

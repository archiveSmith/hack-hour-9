/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
 // sort this array
 array.sort(function(a, b) {
	if(a < b) {
		return -1;
	} else if(a > b) {
		return 1;
	} else {
		return 0;
	}
 });

 // iterate through sorted array and check if current array element equals to what's stored in prevSeen
 var prevSeen;

 for(var i = 0; i < array.length; ++i) {
	if(array[i] === prevSeen) {
		return array[i];
	}
	
	prevSeen = array[i];
 }
 
}
/*
var a1 = [4,2,5,6,7,4];
console.log(repeatNumbers(a1));
*/

module.exports = repeatNumbers;

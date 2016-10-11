/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unqiue integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
	
	// check for edge cases - no array or array with length less than 3
	if(!array || array.length < 3) {
		return;
	}
	/*
	// first sort the array in ascending order
	array.sort(function(a, b) {
		return a-b;
	});
	
	// iterate through array, check in pairs with ptrA and ptrB
	// if value at ptrA === value at ptrB, it's a duplicate so just check next pair
	// if value at ptrA !=== value at ptrB, then unique number at ptrA so return it
	for(var ptrA = 0, ptrB = 1; ptrA < array.length; ptrA = ptrA + 2, ptrB = ptrB + 2) {
		if(array[ptrA] !== array[ptrB]) {
			return array[ptrA];
		}	
	}
	*/
	
	// find the sequence
	var seqCount = (array.length + 1) / 2;
	var seqDoubleSum = 0;
	
	for(var i = 1; i <= seqCount; ++i ) {
		seqDoubleSum = seqDoubleSum + (2 * i);
	}
	
	console.log('seqDoubleSum', seqDoubleSum);
	
	var arraySum = 0;
	// find sum of array
	for(var j = 0; j < array.length; ++j) {
		arraySum += array[j];
	}

	// the unique number is the difference of the 2 sums
	return seqDoubleSum - arraySum;
	
}

/*
console.log(uniqueNumber([1,2,1,3,3])); //-> 2
console.log(uniqueNumber([1,2,1,3,4,3,2])); //-> 4
console.log(uniqueNumber([1,2,3,3,2])); //-> 1
*/

module.exports = uniqueNumber;

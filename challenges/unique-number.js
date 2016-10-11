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
	array = array.sort(function(a, b) { return a - b; })
	for(let i = 0; i < array.length; i++) {
		
		//check if the current element is different from the previous and next element
		if(array[i] !== array[i + 1]  && array[i] !== array[i - 1]) {
			return array[i];
		} 
	}
}

module.exports = uniqueNumber;

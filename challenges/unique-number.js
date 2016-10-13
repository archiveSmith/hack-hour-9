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
	let n = (array.length + 1)/2,
	realSum = n*(n + 1),
	sum = array.reduce((a, b) => a + b);
	
	return realSum - sum
}

module.exports = uniqueNumber;

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
function uniqueNumber(arr) {
	
	let unique = {};
	
	for(let i = 0; i < arr.length; i++) {
		if(unique[arr[i]]) {
			delete unique[arr[i]];
		} else {
			unique[arr[i]] = true;
		}
	}
	return Number(Object.keys(unique)[0]);
}

uniqueNumber([1,2,1,3,3]);

module.exports = uniqueNumber;

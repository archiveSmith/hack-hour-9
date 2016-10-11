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
	let numStore = {};
	array.forEach(num => {
		if(numStore[num]) {
			delete numStore[num];
		} else {
			numStore[num] = true;
		}
	})
	return parseInt(Object.keys(numStore)[0]);
}

module.exports = uniqueNumber;

/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	let max = 0;
	let curr = 0;

	if(array.length < 3) {
		return 0;
	}

	for(let i = 0; i < array.length - 2; i ++) {
		for(let j = i + 1; j < array.length - 1; j++) {
			for(let k = j + 1; k < array.length; k++) {
				curr = array[i] * array[j] * array[k];
				if(curr > max) {
					max = curr;
				}
			}
		}
	}
	return max;
}


module.exports = highestProduct;

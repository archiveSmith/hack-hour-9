/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
//check that there are at least 3 integers
if (array.length <= 2) return 0;

	let negArr = [];
	let posArr = [];

	for (let i = 0; i < array.length; i++) {
		if (array[i] >= 0) {
			posArr.push(array[i]); 
		} else {
			negArr.push(array[i]);
		}
	}

	posArr.sort().reverse();

	//if there are less than 3 positive integers, return prod of top 3 neg
	if (posArr.length <= 2) {
		return negArr[0] * negArr[1] * negArr[2];
	}

	if (posArr.length >= 3 && negArr.length >= 3) {
		if (posArr[0]*posArr[1]*posArr[2] > negArr[0]*negArr[1]*negArr[2]) {

		}
	}

	//if there less than 2 neg integers, must return product of positive ints
	if (negArr.length < 2) {
		return posArr[0] * posArr[1] * posArr[2];
	} else if (posArr[1]*posArr[2] > negArr[0] * negArr[1]) {
		return posArr[0] * posArr[1] * posArr[2];
	} else {
		return posArr[0] * negArr[1] * negArr[2];
	}
}

//the highest two elements that are negative must have a product > than the 
// 2nd and 3rd highest elements that are positive

module.exports = highestProduct;

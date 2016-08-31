/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */



function highestProduct(array) {
	if (array.length < 3) return null;
	let negatives = array.filter((num) =>  num < 0).sort((a, b) => a - b)
	let positives = array.filter((num) =>  num >= 0).sort((a, b) => b - a)
	if (negatives.length === 0) {
		return positives[0] * positives[1] * positives[2];
	} else if (positives.length === 0) {
		let len = negatives.length;
		return negatives[len - 1] * negatives[len - 2] * negatives[len - 3];
	} else if (negatives.length >= 2) {
		let highest1 = negatives[0] * negatives[1] * positives[0];
		let highest2;
		if (positives.length > 2) {
			highest2 = positives[0] * positives[1] * positives[2];
		}
		if (!highest2) return highest1;
		return (highest1 > highest2) ? highest1 : highest2;
	}
}

module.exports = highestProduct;

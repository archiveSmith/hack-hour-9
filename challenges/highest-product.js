/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
		if(array.length < 3) {
			return 0;
		} 
		let sorted = array.sort(function(a,b){return b - a});
		let	highest = sorted.slice(0, 3);
		let negatives = sorted.slice(array.length - 2, array.length);
		negatives.push(sorted[0]);
		
		let resultHigh= highest.reduce(function(prev, curr) {
			return prev * curr;
		});
		
		let resultNeg = negatives.reduce(function(prev, curr) {
			return prev * curr;
		});
		
	return resultHigh > resultNeg ? resultHigh : resultNeg;
}


module.exports = highestProduct;

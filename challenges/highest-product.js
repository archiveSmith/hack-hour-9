/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

	// edge case - array length less than 3
	if(array.length < 3) {
		return 0;
	}
	
	// sort array in ascending order - so array[0] with lowest value
	var sortedArray = array.sort(function(a, b) {
		return a - b;
	});
	
    var val1 = productOfThree(sortedArray.slice(-3));
	var val2 = productOfThree(sortedArray.slice(0, 2).concat(sortedArray.slice(-1)));
	
	return Math.max(val1, val2);

	
	// helper function
	function productOfThree(arrayOfThree) {
		var product = arrayOfThree[0];
		
		for(var i = 1; i < arrayOfThree.length; i++) {
			product = product * arrayOfThree[i];
		}
		
		return product;
	}
}

/* test cases */
/*
console.log(highestProduct([3,5,0,6]));
console.log(highestProduct([-3,-5,0,2,6]));
*/

module.exports = highestProduct;

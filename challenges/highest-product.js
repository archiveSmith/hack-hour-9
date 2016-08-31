/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	//sort array low to high
	array.sort(function(a,b){
		return a-b;
	});
	//multiply the 3 highest numbers (weeding out strings)
	for(var i = (array.length-1), counted = false; counted ===false; i--){
		if (typeof array[i] === 'number'){
			var highnumsprod = array[i]*array[i-1]*array[i-2];
			counted = true;
		}
	}
	
//if there are 2 negatives they can have high product with highest num
	for(var j = array.length-1, counter=0; j>1 && counter ===0 ; j--){
		if (typeof array[j] === 'number'){
			var lownumsprod = array[0]*array[1]*array[j];
			counter++;
		}
	}
	
	if (highnumsprod > lownumsprod){
		return highnumsprod;
	}
	else {
		return lownumsprod;
	}
}


module.exports = highestProduct;

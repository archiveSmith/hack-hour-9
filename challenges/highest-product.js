/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array, storage = []) {
	
	var first = array[0];
	if (array.length === 3){
		return;
	}
	for(ind1 = 1, ind2 = 2; ind2 < array.length; ind1++, ind2++){
		let prod = first*array[ind1]*array[ind2];
		storage.push(prod)
	}
	highestProduct(array.slice(1), storage)
	
    //Find and return largest product
    storage.sort(function(a,b){return b-a})
	var maxProduct = storage[0]
	return maxProduct;
}


module.exports = highestProduct;
// //Recursive function
// 	function pushProducts(array, store){
// 		var first = array[0];
// 		if (array.length===3){
// 			return;
// 		}
// 		for(ind1 = 1, ind2 = 2; ind2 <= array.length; ind1++, ind2++){
// 			let prod = first*array[ind1]*array[ind2];
// 			store.push(prod)
// 		}
// 		pushProducts(array.slice(1), store)
// 	}

// 	var store = [];
// 	pushProducts(array, store)
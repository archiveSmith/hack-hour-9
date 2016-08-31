/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
let subSet = [[]]; 
let highest = 0; 
	for(let i = 0; i < array.length; i++) {
		for(let j = 0, len = subSet.length; j < len; j++) {
			let temp = subSet[j].concat(array[i]);
				if(temp.length === 3) {
					let product = temp.reduce(function(x,y) { 
  					return x * y;
  				});
  				if(product > highest) {
						highest = product; 
					}
				}
			subSet.push(temp);
		}
	}
return highest;
}


module.exports = highestProduct;

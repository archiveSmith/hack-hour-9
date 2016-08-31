/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if (array.length < 3) {
		return 0;
	}
  //sort array to order smallest to largest. 
  //reverse so largest is first. 
  //splice so only first 3 largest values are in array. 
  let arrLarge = array.sort().reverse().splice(0, 3);
  //multiply all 3 numbers. 
  console.log(arrLarge)
  let output = arrLarge.reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue * currentValue;
  });
  return output;
}


module.exports = highestProduct;

/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  //return 0.
  if (array.length < 3) {
    return 0;
  }
  //sort array to order smallest to largest. 
  //reverse so largest is first. 
  //splice so only first 3 largest values are in array. 
  let arrLarge = array.sort().reverse()
  //create array of negative values.
  let negs = array.filter((val) => {
    return val < 0;
  });
  //if neg has more than 2 values, concat with large array.
  if (negs.length > 1) {
    arrLarge = negs.concat(arrLarge)
  }
  //splice for 3 first values.
  arrLarge = arrLarge.splice(0, 3);
  //multiple array values.
  let output = arrLarge.reduce((previousValue, currentValue, currentIndex, array) => {
    console.log(currentValue)
    return previousValue * currentValue;
  });

  return output;
}


module.exports = highestProduct;

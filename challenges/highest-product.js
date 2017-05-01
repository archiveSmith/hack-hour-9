/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

//find the three hightest numbers

function highestProduct(array) {
  if (array.length < 3) return 0;

  array = array.sort().slice(-3);
  return array.reduce(function(num1,num2){
    return num1 * num2;
  });
}

console.log(highestProduct([4,5]))


module.exports = highestProduct;

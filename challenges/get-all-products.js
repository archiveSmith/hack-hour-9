/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */
function getAllProducts(array) {
  if (array === null || array.length === 0 || array === undefined){
    return [0];
  }
  if(array.length === 1){
    return array;
  }
  var answer = [];
  var temp;
  var product;
  //loop through array. Each time replace array[i] with 1. Then loop through the array and multiply all numbers including the one replaced with 1, and push that product into answer. Repeat for each number in the array. Return answer.
  for (var i = 0; i < array.length; i++){
    temp = array[i];
    var product = 1;
    array[i] = 1;
    for (var j = 0; j < array.length; j++){
      product *= array[j];
    }
    array[i] = temp;
    answer.push(product);
  }
  return answer;
}

module.exports = getAllProducts;
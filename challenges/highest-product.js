/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
// function highestProduct(array, target = 1) {
//   if (!array.length) {
//     return target;
//   }
//   const useItem = highestProduct(array.slice(1), target * array[0]);
//   const ignoreItem = highestProduct(array.slice(1), target);
//   return useItem > ignoreItem ? useItem : ignoreItem;
// }
function highestProduct(array) {
  if (array.length < 3) return 0;
  const products = [];
  function findThree(arr, curr = []) {
    if (curr.length >= 3) {
      products.push(curr.reduce((memo, item) => memo * item));
      return;
    } else if (!arr.length) {
      return;
    }
    findThree(arr.slice(1), curr);
    findThree(arr.slice(1), curr.concat(arr[0]));
  }
  findThree(array);
  return products.reduce((memo, product) => memo > product ? memo : product);
}


module.exports = highestProduct;

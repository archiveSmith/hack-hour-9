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
// <<<<<<< HEAD
// function getAllProducts(array) {
//   if (array.length === 0) return [0];
//   let productArray = [];
//   for (let i = 0; i < array.length; i++) {
//     let mult = 1;
//     for (let j = 0; j < array.length; j++) {
//       if (j !== i) {
//         mult *= array[j]
//       }
//     }
//     productArray.push(mult)
//   }
//   return productArray;
// }
// =======

// function getAllProducts(array) {

// }

// >>>>>>> 72cb4a8ff4445f50af34aba53fcf550f3e3debb9
// module.exports = getAllProducts;

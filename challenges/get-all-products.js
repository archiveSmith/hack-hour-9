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

// function getAllProducts(array) {
//   if (array.length === 0) return [0];
//   let counter = 0;
//   const output = [];
//   while (counter < array.length) {
//     let product = 1;
//     for (let i = 0; i < array.length; ++i) {
//       counter !== i ? product *= array[i] : false;
//     }
//     output.push(product);
//     counter++;
//   }
//   return output;
// }

function getAllProducts(arr) {
  if (arr.length === 0) return [0];
  const total = arr.reduce((a, b) => {
    if (a === 0 || b === 0) {
      return a;
    }
    return a * b;
  }, 1);
  const output = [];
  arr.forEach((num) => {
    if (num === 0) {
      output.push(0);
    } else {
      output.push(total / num);
    }
  });
  return output;
}

// tests
console.log(getAllProducts([1, 7, 3, 4, 0]), ' = [84, 12, 28, 21]');
console.log(getAllProducts([1]), ' = [1]');
console.log(getAllProducts([]), ' = [0]');

module.exports = getAllProducts;

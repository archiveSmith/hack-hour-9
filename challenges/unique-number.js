/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unqiue integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

function getAllProducts(array) {
  let results = [];
  let tempMultiply = 1;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        tempMultiply = array[j] * tempMultiply;
      }

    }
    results.push(tempMultiply);
    tempMultiply = 1;
  }
  return results;
}

module.exports = uniqueNumber;

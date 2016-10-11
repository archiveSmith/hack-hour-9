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
function uniqueNumber(array) {
  const hash = {};
  let result = null;
  const l = array.length;

  for (var i = 0; i < l; i++) {
    if (array[i] in hash) {
      hash[array[i]] += 1;
    } else {
      hash[array[i]] = 1;
    }
  }
  for (var j in hash) {
    if (hash[j] == 1) {
      result = j;
    }
  }

  return result;
  
}
module.exports = uniqueNumber;

// O(n) with no space: deep into Bits for solution
// function find_unique_xor (array) {
//   var result = 0, n = array.length;

//   for (var i = 0; i < n; i++) {
//     result ^= array[i]; 
//   }

//   return result;
// }
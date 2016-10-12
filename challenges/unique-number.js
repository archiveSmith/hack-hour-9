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

function uniqueNumber(array)  {
  var result = null, n = array.length;

  for (var i = 0; i < n; i++) {
    for (var j = i; j < n; j++) {
      if (array[i] != array[j]) {
        result = array[i];
      }
    }
  }

  return result;
}

module.exports = uniqueNumber;

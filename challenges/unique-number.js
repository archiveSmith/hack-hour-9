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
  let storage = {}
  for (let i = 0; i < array.length; i++) {
    if (!storage[array[i]]) {
      storage[array[i]] = array[i]
    } else {
      delete storage[array[i]]
    }
  }
  //No iteration required below. Thefor loop returns immediately since only one property in the object exists
  for (var num in storage) {
    return storage[num];
  }
}

module.exports = uniqueNumber;

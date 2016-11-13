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
  const numberBox = {};
  for (let i = 0; i < array.length; i++) {
    numberBox[array[i]] = numberBox[array[i]] + 1 || 1;
  }
  for (let key in numberBox) {
    if (numberBox[key] === 1) {
      return key;
    }
  }
  return false;
}

console.log(uniqueNumber([1,2,1,3,3]));

module.exports = uniqueNumber;

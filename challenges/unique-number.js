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
  const count = {};
  array.forEach((num) => {
    count[num] ? count[num] += 1 : count[num] = 1;
  });
  for (let key in count) {
    if (count[key] === 1) return key;
  }
  return false;
}

// tests
console.log(uniqueNumber([1, 2, 1, 3, 3]), '= 2');
console.log(uniqueNumber([1, 2, 2, 3, 3]), '= 1');

module.exports = uniqueNumber;

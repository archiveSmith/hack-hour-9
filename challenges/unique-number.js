/**
 * Given an array of IDs, which contains many duplicates (there are two) integers and one unique integer,
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
  const cache = {};

  array.forEach((num) => {
    cache[num] = (cache[num] === undefined);
  });

  for (let key in cache) {
    if (cache[key]) return Number(key);
  }

  return undefined;
}

module.exports = uniqueNumber;

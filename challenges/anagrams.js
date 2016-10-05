/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  if (string.length === 1) return [string];

  const anagramObj = anagrams(string.slice(1))
    .map(anagram => insertCharAtEachIndex(string[0], anagram))
    .reduce((acc, next) => Object.assign(acc, stringArrayToObj(next)), {});

  return Object.keys(anagramObj).sort();
}

function insertCharAtEachIndex(char, string) {
  return range(0, string.length + 1)
    .map(index => string.slice(0, index) + char + string.slice(index));
}

function stringArrayToObj(array) {
  return array.reduce((acc, next) => {
    acc[next] = true;
    return acc;
  }, {});
}

function range(start, stop) {
  const result = [];
  for (let i = start; i < stop; i++) {
    result.push(i);
  }

  return result;
}

module.exports = anagrams;

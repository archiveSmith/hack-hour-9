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
function anagrams(str, i, storage) {
  if (typeof str === "string") {
    str = str.split("");
  }
  if (!i) i = 0;
  if (!storage) storage = [];
  if (i >= str.length) {
    return storage;
  }
  for (var j = i; j < str.length; j++)
    storage.push(switchLetter(str, i, j));
  return anagrams(str, i + 1, storage);
}

function switchLetter(str, i1, i2) {
  if (i1 != i2) {
    var temp = str[i1];
    str[i1] = str[i2];
    str[i2] = temp;
  }
  return str.join("");
}

module.exports = anagrams;
ams;

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

  if (string === '') { return [''] };
  let str = string.split('');
  let hash = {};
  let output = [];
  let perm;
  let c;
  // console.log(str);
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str.length; j++) {
      perm = str;
      c = perm[j];
      perm[j] = str[i];
      perm[i] = c;
      hash[perm.join('')] = true;
    }
  }
  return Object.keys(hash);
}

module.exports = anagrams;
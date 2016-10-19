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
  const result = [];

  function takeIn(begin, end) {
    if (!end.length) {
      result.push(begin);
    }

    for (let i = 0; i < end.length; i++) {
      takeIn((begin + end[i]), (end.substring(0, i) + end.substring(i + 1)));
    }
  }
  takeIn('', string);
  return result;
}

module.exports = anagrams;

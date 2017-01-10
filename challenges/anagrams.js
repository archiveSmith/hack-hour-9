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
  // store all results in an array
    const result = [];

    function recurse(begin, end) {
    // BASE CASE: no more letters to add
      if (!end.length) result.push(begin);

    // Add a new letter to the end of 'begin' and recurse
      for (let i = 0; i < end.length; i++) {
        recurse((begin + end[i]), (end.substring(0, i) + end.substring(i + 1)));
      }
    }

    recurse('', string);
    return result;
}

module.exports = anagrams;
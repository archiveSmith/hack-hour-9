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
  const arr = [];
  let iterations = 1;
  for (let i = 2; i <= string.length; i++) {
    iterations *= i;
  }
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= (iterations / string.length) + i; j++) {
      console.log(j);
      let str = string[i];
      //if (j >= string.length) {
        str += string[j - i];
        str += string[j - i - 1];
      //} else {
      //   str += string[j+1];
      //   str += string[j + 2];
      // }
      arr.push(str);
    }
  }
  return arr;
}


module.exports = anagrams;

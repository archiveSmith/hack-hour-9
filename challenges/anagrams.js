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
  const str = string.split();
  const buffer = [];
  let index = 0;

  if (buffer >= str.length) {
    return buffer;
  } 
  for (var i = index; i < str.length; i++)
        buffer.push(ToggleLetters(str, index, i));
    return anagrams(str, index + 1, buffer);

}

function ToggleLetters(str, index1, index2) {
    var temp = str[index1];
    str[index1] = str[index2];
    str[index2] = temp;
    return str.join("");
}

anagrams('abc');

module.exports = anagrams;
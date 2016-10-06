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
  const output = [];
  if (!string) {
    return [''];
  }
  const stringArr = string.split('');
  let mutableArr = Array.from(stringArr);
  output.push(string);
  for (let t = 0; t < stringArr.length; ++t) {
    for (let i = t, j = i + 1; i < stringArr.length; ++i, ++j) {
      if (!mutableArr[j]) {
        mutableArr = Array.from(stringArr);
        break;
      }
      const valueI = mutableArr[i];
      const valueJ = mutableArr[j];
      mutableArr[i] = valueJ;
      mutableArr[j] = valueI;
      const newGram = mutableArr.join('');
      if (output.includes(newGram)) {
        continue;
      }
      output.push(newGram);
    }
  }
  output.push(stringArr.reverse().join(''));
  const last = mutableArr.slice(mutableArr.length - 1)
    .concat(mutableArr.slice(0, mutableArr.length - 1));
  output.push(last.join(''));
  return output;
}

module.exports = anagrams;

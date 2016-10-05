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
  if (typeof string !== 'string') return [];
  if (string.length === 0) return [''];
  const strArr = string.trim().toLowerCase().split('');
  const perms = []
  function permutations(charArr, prev =[]) {
    let len = charArr.length, cur, i;
    for (i = 0; i < len; i++) {
      cur = charArr.splice(i, 1);
      if (charArr.length === 0) {
        perms.push(prev.concat(cur).join(''));
      }
      permutations(charArr.slice(), prev.concat(cur));
      charArr.splice(i, 0, cur[0]);
    }
  }
  permutations(strArr);
  return Object.keys(perms.reduce((memo, item) => { 
    memo[item] = true;
    return memo;
  }, {}));
}

module.exports = anagrams;

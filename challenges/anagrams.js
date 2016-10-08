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
    function permute(string, prefix) {
        if (!string.length) {
            return [prefix];
        } else {
            let result = [];
            for (let i = 0; i < string.length; i++) {
                let first = string.slice(0, i);
                let last = string.slice(i + 1);
                result = result.concat(permute(first + last, string[i] + prefix));
            }
            return result;
        }
    }
    return permute(string,"").filter((el,idx,arr) => arr.indexOf(el) === idx);
}

module.exports = anagrams;

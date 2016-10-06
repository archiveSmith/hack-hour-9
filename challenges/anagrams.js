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
  if (string.length === 0) return [''];
  if (string.length === 1) return [string];

  const combos = [];
  const letters = string.split('');

  letters.forEach((letter, i) => {
    const subsetString = string.slice(0, i).concat(string.slice(i + 1, string.length));
    const innerCombos = anagrams(subsetString);

    innerCombos.forEach((combo) => {
      combos.push(letter + combo);
    });
  });

  const filtered = combos.reduce((accumulated, curr) => {
    accumulated[curr] = true;
  }, {});

  return Object.keys(filtered);
}

// console.log(anagrams('abc'));

module.exports = anagrams;

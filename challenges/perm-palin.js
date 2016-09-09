/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  const lowerCase = str.toLowerCase();
  const histogram = characterHistogram(lowerCase);
  const charCounts = characterCounts(histogram);

  return noMoreThanOne(charCounts, count => count % 2 === 1);
}


function characterHistogram(str) {
  return str.split('').reduce((hist, char) => {
    hist[char] = hist[char] || 0;
    hist[char]++;
    return hist;
  }, {});
}


function characterCounts(histogram) {
  const counts = [];

  Object.keys(histogram).forEach(character => {
    counts.push(histogram[character]);
  });

  return counts;
}


function noMoreThanOne(array, callback) {
  let seen = false;

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      if (seen) return false;
      seen = true;
    }
  }

  return true;
}


module.exports = permPalin;

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
  if (str.length === 1) {
    return true;
  }
  let hash = hashCountChar(str);
  let oddCount = 0
  for (chars in hash) {
    if (hash[chars] === 'odd') {
      oddCount++;
    }
    if (oddCount > 1) {
      return false;
    }
  }
  return true;
}

//create hash indicating if characters are even or odd. 
function hashCountChar(st) {
  let hashCount = {};
  for (var i = 0; i < st.length; i++) {
    var reg = new RegExp(st[i], 'gi');
    let count = st.match(reg).length;
    // console.log('occ', st[i], count);
    let evenOrdOdd = count % 2 === 0 ? 'even' : 'odd';
    // console.log('occ', st[i], count, evenOrdOdd);
    hashCount[st[i]] = evenOrdOdd;
  }
  return hashCount;
}

console.log(permPalin('cbaba'));

module.exports = permPalin;
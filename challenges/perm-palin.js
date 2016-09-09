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
  let centerChar = false;
  let center;
  // check to see if there is a even number of each character
  for (let i = 0; i < str.length; i++){
    // console.log(str[i]);
    let char = str[i];
    let charCount = 0;
    for (var j = 0; j < str.length; j++) {
      if (char == str[j]) {
        charCount++
      }  
    }
    // if there is a odd number and we alread assigned center then return false
    if (charCount % 2 == 1) {
      if (centerChar == true && center != char) {
        return false;
      } else {
        centerChar = true;
        center = char;  
      }
    }
  }
  // we made it thru so return true
  return true;
}

module.exports = permPalin;
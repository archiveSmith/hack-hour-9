/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  //takes in two strings and returns true if the second string is found.
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  //check if the second string is in the first string
  var arr1 = s1.split('');
  var arr2 = s2.split('');
  
  for (var i = 0; i < arr2.length; i++){
    if (!arr1.includes(arr2[i])){
      return false;
    }
  }
  
  return true;
  
}

//loop through each item of s2 and check if it's in s1

console.log(stringRotation('hello', 'oll'))

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

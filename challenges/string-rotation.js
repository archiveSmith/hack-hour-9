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
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  let s1Arr = s1.split('');
  let s2Arr = s2.split('');
  let tempArr = [];
  let result = false;
  let lenCounter = s2Arr.length - 1;


  if (s1Arr.length === s2Arr.length) {
  	while (lenCounter >= 0) {
      for (let i = 0; i < s1Arr.length; i++) {
      	// for (let ) {
          tempArr[i] = s1Arr[s1Arr.length-1];
      	// } 
      }
      --lenCounter;
  	}
  }
  else {
      return "send me words with the same length, please"
  }

  return tempArr;
}

stringRotation('tudo','udot');


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

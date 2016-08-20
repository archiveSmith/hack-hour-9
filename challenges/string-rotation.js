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
	// check if length is same, if not return false
	if(s1.length !== s2.length) {
		return false;
	}
	
	// get first char of s1
	var charS1 = s1.slice(0,1);
	
	// get the index in s2 for the first char in s1
	var indexS2 = s2.indexOf(charS1);
	
	// not found, return false
	if(indexS2 === -1) {
		return false;
	}
	
	// append sliced string segments of s2 and see if matched with s1
	var tempStr = s2.slice(indexS2) + s2.slice(0, indexS2);
	
	return isSubstring(s1, tempStr);
	

}

/* tests */
/*
console.log(stringRotation("hello", "hello"));
console.log(stringRotation("hello", "llohe"));
console.log(stringRotation("hello", "he"));
console.log(stringRotation("hello", "ollhe"));
console.log(stringRotation("people", "plepeo"));
*/


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

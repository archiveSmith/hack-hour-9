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

//if it is a rotation, then we can loop thru every rotation, if both length and substr are true, then it is a rotated version.

function stringRotation(s1, s2) {
	let arr1 = s1.split('');
	let arr2 = s2.split('');
	// console.log(arr1);

	if (s1.length !== s2.length) {
		return false;
	} else {
		for (let i = 0; i < s1.length; i++) {
			let counter = 0;
			let temp = arr1.pop();
			arr1.unshift(temp);
			for (let i = 0; i < arr1.length; i++) {
				if (arr1[i] === arr2[i]) {
				counter++;
				}
			}
		 	if (counter === s1.length) {
		 		return true;
		 	}
		}
		return false;
	}
}


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

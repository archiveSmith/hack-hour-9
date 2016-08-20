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
	const length = s1.length;
	if (s2.length !== length){
		return false;
	}
	else{
		let s1array = s1.split("");
		let s2array = s2.split("");
		const firstCharMatch = s1array.indexOf(s2array[0]);
		
		let endmatch;
		let startmatch;
		for(let i = firstCharMatch, j = 0; i < length; i++, j++  ){ 
			if (s1array[i] !== s2array[j]){
				endmatch = false;
			
			}
			else{
				endmatch = true;
				console.log("endmatch is " + endmatch);
			}
		for (let k = 0, l = (length - firstCharMatch); l < length; k++, l++){
			console.log(s1array[k]);
			console.log(firstCharMatch);
			if (s1array[k] !== s2array[l]){
				startmatch = false;
			}
			else{
				startmatch = true;
			}
		}
		// console.log("endmatch is " + endmatch);
		console.log("startmatch is " + startmatch);
		}
		if (startmatch && endmatch){
			return true;
		}
		else{return false;}
	}
}

console.log(stringRotation("october", "oberoct"))
//length has to match
//approach 1: figure out index of first character to match, loop through end and then loop through beginning to see if still match; then figure out if another index is starting point... this solution went nowhere.
//approach 2: figure out if there's a shorter way to do this.

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

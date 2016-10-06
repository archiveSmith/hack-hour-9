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
  //something like Rock Paper Scissors except there are more than 3 options.
  let arr = string.split("");
  let len = string.length;
  let combos = 1;
  //# of possible combos for length of array.
  for (let j = len; j > 0 ; j--){
	combos *= j;
	}
	let outer = new Array(combos);
	
  for(let i = 0; i < (combos/len); i++){
  	let inner = '';
  	inner += arr[i];
  	outer[i]=(inner);
  }
  console.log(outer)
  let newstring = "";
  if (string.length === 1){
	//base case
  }
  
  //something recursive involving each segment of the word and the combos that are possible with the remaining letters.

}

anagrams("pilot")


module.exports = anagrams;

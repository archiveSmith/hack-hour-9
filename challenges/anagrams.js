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
	var final = [];
	var total = 1;
	for (var i = string.length; i > 0; i--){
		total *= i;
	}
	console.log('total', total/string.length);
	for (var j = 0; j < total/string.length; j++){
		if(final.length === 0){
			final.push(string);
		} else {
			var temp = string[1];
			
			final.push();
		}
	}
	// console.log('final', final);
	var splitted = string.split('');
	console.log(splitted);
	
	for (var k = 0; k < final.length; k++){
		
	}
	//get length of string
	//hold first index in place
	//remove the letter you're holding from the splitted string
	//loop through split string starting at the next index
	//concatenate 
	
	
	return final;
}

module.exports = anagrams;

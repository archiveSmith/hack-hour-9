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
	if (str.length === 1) {return true}
	// console.log(str.length)
	segments = [];
	var segArray = recurseCreateSegments(str, segments);
	console.log('x is', segArray);

	var flag = false;

	segArray.forEach(function(item){
	if(item.length > 2){
		if (item === item.split('').reverse('').join('')){
			flag = true;
		}
	}
	})
	return flag;
}



function recurseCreateSegments(str, segments) {
	if(str.length === 1) {return segments}
	for(var index = 0; index < str.length; index++){
			segments.push(str.substring(index))	
	}
	return recurseCreateSegments(str.substring(1), segments)
}

module.exports = permPalin;
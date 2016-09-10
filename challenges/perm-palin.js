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
	if(str.length === 1){ return true; }
	
	var stArr = str.split('');
	console.log(stArr);
	var obj = {};
	
	//create freq counter for each letter in string
	stArr.forEach(function(letter){
		if(!obj[letter]) {obj[letter] = 1}
		else(obj[letter]++)
	});
	console.log(obj)
	
	var numOdds = 0;
	//set counter for number of letters that occur an odd num times
	for(let key in obj){
		if(obj[key] % 2 !== 0){
			numOdds++;
		}
	}
	
	if(numOdds > 1){ return false; }
	return true;
}

module.exports = permPalin;



// permPalin('abababa')

// function permPalin(str) {
// 	if (str.length === 1) {return true}
// 	// console.log(str.length)
// 	segments = [];
// 	var segArray = recurseCreateSegments(str, segments);
// 	console.log('x is', segArray);

// 	var flag = false;

// 	segArray.forEach(function(item){
// 	if(item.length > 2){
// 		if (item === item.split('').reverse('').join('')){
// 			flag = true;
// 		}
// 	}
// 	})
// 	return flag;
// }


// function recurseCreateSegments(str, segments) {
// 	if(str.length === 1) {return segments}
// 	for(var index = 0; index < str.length; index++){
// 			segments.push(str.substring(index))	
// 	}
// 	return recurseCreateSegments(str.substring(1), segments)
// }


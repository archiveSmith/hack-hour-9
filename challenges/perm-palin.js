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
    if (str.length === 1) return true; 
    let table = str.toLowerCase().split('').reduce(function (acc,item,idx){
        if (acc[item] === undefined) {
            acc[item] = 1;
        } else {
            acc[item] += 1;
        }
        return acc;
    },{})
	let values = [];
	
	for (let keys in table){
		values.push(table[keys]);
	}
	values = values.map(function(x) { return parseInt(x)});
	let isOneOddandRestEven = checkOddsEvens(values);
	return values.every((value) => value%2===0) || isOneOddandRestEven;
}

function checkOddsEvens(arr){

	return arr.filter(item => item%2!==0).length === 1;

}

module.exports = permPalin;
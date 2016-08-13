/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
//check if array only contains numbers
if (array.length === 0 || !array.every(function(x){return typeof x === 'number'})){
	console.log('the array needs to be .length > 0 and to only contain numbers');
	return array;
}
if (array.length === 1){
	return true;
}
let len = array.length;
let mean = Math.floor((array.reduce(function(acc,item){return acc+=item;}))/len);
let table = array.reduce(function(acc,item){
	if (acc[item] === undefined){ acc[item] = 1;}
		else {acc[item] += 1;}
	return acc;
},{});
let modes = [];
var s = {value : null, occur: 0};

for (var key in table){
	if (table[key] > s.occur){
		s.value = key;
		s.occur = table[key];
	} else if(table[key] == s.occur){
		if (key > s.value){
			s.value = key;
		}
	}
}
console.log(s);
return s.value === mean;




}
let arr = [1,2,420,2,2];
console.log(modemean(arr));
module.exports = modemean;

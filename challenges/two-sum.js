/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

//ITERATIVE METHOD
// function twoSum(arr, n) {
// 	if (arr.length === 0) return false;
// 	if (typeof n !== 'number') return undefined;
	
// 	for(var ind0 = 0; ind0 < arr.length-1; ind0++){
// 		for(var ind1 = ind0+1; ind1 < arr.length; ind1++){
// 			if(arr[ind0] + arr[ind1] === n) return true;
// 		}
// 	}
// 	return false
// }


// SINGLE LOOP CACHE METHOD
function twoSum(arr,n){
    if (arr.length === 0) return false;
    if (typeof n !== 'number') return undefined;
    var cache = {};

	for(var ind = 0; ind < arr.length; ind++){
            if(cache[arr[ind]]) return true; 
            var diff = n - arr[ind];
			cache[diff] = 'true';
		}
	return false
}


module.exports = twoSum;


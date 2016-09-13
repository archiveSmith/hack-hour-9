/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
	arr.sort(function(a, b){return a-b});
	var i = 0
	var j = arr.length-1
	while(i < j){
   	if      (arr[i] + arr[j] == n){
   		return true;	
   	} 
   	else if (arr[i] + arr[j] <  n){ 
   		i++;
  	}
  	else if (arr[i] + arr[j] >  n){ 
   		j--;
   	}
	}
	return false
}

module.exports = twoSum;

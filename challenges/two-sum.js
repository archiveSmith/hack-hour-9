/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (arr.length != 0){
    if(typeof n === 'number'){
      for ( let i = 0; i < arr.length-1; i ++){
        for ( let j = 1; j < arr.length; j++){
          if (arr[i] + arr[j] === n){
            return true;
          }
        }
      }
    return false; // if it's a number but nothing adds up to it
    }
    else {
    	return undefined; // if n isn't a number
    }
   return false; // if there's nothing in the array
  }
}

module.exports = twoSum;

/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  
  //brute force
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    for (let j = 1; j < arr.length; j++) {
      if (arr.indexOf(currNum) != arr.indexOf(arr[j])) {
        console.log(arr.indexOf(currNum),arr.indexOf(arr[j]));
	      if (currNum + arr[j] == n && currNum != n && arr[j] != n ) {
	        return true;
	      }      	
      }
    }
  }
  return false;
}

// console.log(twoSum([3,4,-1,4],7));
module.exports = twoSum;

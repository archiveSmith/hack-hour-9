/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

  let differences = {};
  
  for (let i = 0; i < arr.length; i++) {
    let difference = n - arr[i];
    differences[arr[i]] = difference;
  }
  
  for (let key in differences) {
  	if (arr.indexOf(differences[key]) > -1) {
  		return true;
  	}
  }
  return false;

}

let nums = [4,1,1,1,2];
twoSum(nums, 6)

module.exports = twoSum;

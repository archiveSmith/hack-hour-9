/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
//  let max = helperSum(arr);  
//  for(let i = 0; i < arr.length; i++) {
//  	for(let j = 1; j < arr.length; j++) {
//  		let slicedArr = arr.slice(i,j);
//  		if(slicedArr.length === 0) {
//  			continue; 
//  		}
// 		if(helperSum(slicedArr) > max) {
// 			max = helperSum(slicedArr);
// 		}
//  	}
//  }

//  function helperSum(arr) {
//  	return arr.reduce(function(prev, curr) {
//  		return prev + curr;
//  	});
//  }

// return max; 
// function maxSubarray(arr) {

  let currentMax = Number.NEGATIVE_INFINITY;
  let finalMax = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    finalMax = Math.max(finalMax, currentMax);
  }
  return finalMax;


}

module.exports = maxSubarray;

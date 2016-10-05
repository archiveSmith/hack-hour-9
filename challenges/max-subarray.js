/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {

	 
	//if element is negative at first element or last element remove them;
	//as long as the first or last element is not negative
	let allNegs = 0;
	let currSum = 0;
	
	//handle if array is all negatives
	
	while(arr[0] < 0) {
		arr = arr.slice(1);
	}
	
	while(arr[arr.length-1] < 0) {
		arr = arr.slice(0, -1);
	}
	
	for (let i = 0; i < arr.length; i++) {
		currSum+=i;
		if(currSum < 0) {
			arr = arr.slice(i+1);
			currSum = 0;
		}
	}
	
	return currSum;
	
}


maxSubarray([1, -2, 3, 3, -4, 7, 2, -5])

module.exports = maxSubarray;

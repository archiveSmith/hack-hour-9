/* 
A zero-indexed array A consisting of N different integers is given. 
The array contains integers in the range [1..(N + 1)], which means 
that exactly one element is missing.Your goal is to find that missing element.
Write a function that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

Challange: 
  ** cannot use additional storage, variables are okay not any TYPE of object
  ** keep in mind time complexity
*/
function missingNum(Array) {
	let supposedLength = Array.length + 1;
	let actualLength = Array.length;
	let supposedSum = 0;
	let actualSum = 0;
	
	for (let i = 1; i <= supposedLength; i++) {
		supposedSum += i;	
	}
	
	for (let j = 0; j < actualLength; j++) {
		actualSum += Array[j];
	}

	return supposedSum - actualSum;
}

missingNum([9,8,7,6,5,4,3,1])

module.exports = missingNum;
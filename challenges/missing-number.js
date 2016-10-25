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
function missingNum(array) {
  if (!Array.isArray(array) || array.length === 0) return 0;
  const n = array.length;
  const expectedSum = .5 * n * (1 + n)
  const actualSum = array.reduce((a, v) => a + v);
  const diff = actualSum - expectedSum;
  return ((n + 1) - diff) ? ((n + 1) - diff) : n + 1;
}

module.exports = missingNum;
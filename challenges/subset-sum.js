/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

 function subsetSum(array, target) {
     array = array.filter(function (value) {
         return value <= target;
     });
     array.sort(function (a, b) {
         return b - a;
     });

     var result = [];

     while (array.length > 0) {
         var i;
         var sum = 0;
         var addedIndices = [];

         for (i = 0; i < array.length; i++) {
             if (sum + array[i] <= target) {
                 sum += array[i];
                 addedIndices.push(i);
             }
         }

         var subset = [];
         for (i = addedIndices.length - 1; i >= 0; i--) {
             subset.unshift(array[addedIndices[i]]);
             array.splice(addedIndices[i], 1);
         }
         result.push(subset);
     }

     var sum = result[0].reduce(add, 0);

 	function add(a, b) {
     	return a + b;
 	}

 	return sum === target;
 }
 
module.exports = subsetSum;

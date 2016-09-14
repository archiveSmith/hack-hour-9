/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

 function twoSum(arr, n) {
   if (typeof n !== 'number' || isNaN(n)) return undefined;

   const cache = {};
   for (let i = 0, length = arr.length; i < length; i++) {
   	if (cache[n - arr[i]]) return true;

   	cache[arr[i]] = true;
   }

   return false;
 }


module.exports = twoSum;

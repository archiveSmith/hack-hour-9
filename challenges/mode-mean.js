/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


 function modemean(array) {
   const frequency = {};
   let max = 0;
   let mode;
   let mean;
   let total = 0;
   for (let i = 0; i < array.length; i++) {
     frequency[array[i]] = (frequency[array[i]] || 0) + 1;
     if (frequency[array[i]] > max) {
       max = frequency[array[i]];
       mode = array[i];
     } else if (frequency[array[i]] === max) {
       if (array[i] > max) {
         max = frequency[array[i]];
         mode = array[i];
       } else {
         max = frequency[max];
         mode = array[max];
       }
     }
     total += array[i];
   }
   mean = Math.floor( total / array.length);
   if (mode === mean) {
     return true;
   } else {
     return false;
   }
 }

module.exports = modemean;

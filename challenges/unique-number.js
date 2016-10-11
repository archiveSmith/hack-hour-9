/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unqiue integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

function uniqueNumber(array){
  for (var i = 0; i < array.length; i+=2){
    if(array[i] !== array[i+1]){
      if(array[i] > array[i+2]){
        return array[i];
      } else {
        return array[i+1];
      }
    } 
  }
}

module.exports = uniqueNumber;

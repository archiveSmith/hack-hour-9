/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
	// let result = [];
	// let len = arr1.length + arr2.length;
	// let index = 0;
	// let idx1 = 0;
	// let idx2 = 0; 
	// while(index < len - 1) {
	// 	if(arr1[idx1] < arr2[idx2]) {
	// 		result.push(arr1[idx1]);
	// 		idx1++; 
	// 		index++;
	// 	} else {
	// 		result.push(arr2[idx2]);
	// 		idx2++;
	// 		index++; 
	// 	}
	// }
	// if(idx2 !== arr2.length) return result.concat(arr2.slice(idx2));
	// if(idx1 !== arr1.length) return result.concat(arr1.slice(idx1));
	// return result; 
	array.sort(function(a,b){
    return a[0]-b[0];
  });
  var i = 0;
  while (i<array.length-1){
    if (array[i][1]>=array[i+1][0]){
      if (array[i][1]<array[i+1][1]){
	array[i][1] = array[i+1][1];
      }
      array.splice(i+1,1);
    }
    else{
      i++;
    }
  }
  return array;
}

module.exports = mergeArrays;

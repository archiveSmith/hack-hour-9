/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// function maxSubarray(arr) {
// 	var sum = 0;
// 	var group = false, firstPosIndex;
	
// 	//trim negative numbers from beginning and end of arr
// 	while(arr[arr.length-1] < 0) {
// 		arr.pop();
// 	}
// 	while(arr[0] < 0){
// 		arr.shift();
// 	}
// 	//add minisums each time you reach a positive number; if it's positive, include it in the final sum
// 	for (var i = 0; i < arr.length; i++){
		
// 		if (arr[i] > 0) {
// 			if (!group) {
// 				group = true;
// 				firstPosIndex = i;
// 			}
// 		} else {
// 			var minisum = arr.slice(firstPosIndex, (i+1)).reduce(function(a,b){
// 				return a + b;
// 			});
			
// 			if (minisum > 0){
// 				sum += minisum;
// 				group = false;
// 			} 
// 			else {
// 				firstPosIndex = i+1;
// 				group = false;
// 			}
// 		}
// 	}
//   //add any remaining positive numbers to sum
// 	if (group){
// 			minisum = arr.slice(firstPosIndex).reduce(function(a,b){
// 				return a + b;
// 			});
// 			sum += minisum;
// 		}
// 	return sum;
// }

function maxSubarray(arr) {

  if (arr.length === 1) {
    return arr[0];
  }

  var atLeastOnePositive = false;
  var largestNum = arr[0];
  
  //if there are all negative numbers, return the smallest number
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      atLeastOnePositive = true;
    }
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  
  if(!atLeastOnePositive) {
    console.log('there are no positives');
    return largestNum;
  }
  
  //there's at least one positive number
  var sum = 0;
  var group = false, firstPosIndex;
  
  //trim negative numbers from beginning and end of arr
  while(arr[arr.length-1] < 0) {
    arr.pop();
  }
  while(arr[0] < 0){
    arr.shift();
  }
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
      if (!group) {
        group = true;
        firstPosIndex = i;
      }
    } else {
      var minisum = arr.slice(firstPosIndex, (i+1)).reduce(function(a,b){
        return a + b;
      });
      
      if (minisum > 0 && ((arr[i]+1)>0)){
        sum += minisum;
        group = false;
      } 
      else {
        if (minisum + i > 0){
          minisum += i;
        }
        group = false;
      }
    }
  }
  //add any remaining positive numbers to sum
  if (group){
    minisum = arr.slice(firstPosIndex).reduce(function(a,b){
      return a + b;
    });
    sum += minisum;
  }
  return sum;
}

module.exports = maxSubarray;

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
	return arr1.concat(arr2).sort((a,b) => {return a-b});
}

module.exports = mergeArrays;
 //*
 //* var my_array = [3,4,6,10,11,15,21];
 //* var another_array = [1,5,8,12,14,19];
 //*
 //* mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 //* 
 //* BONUS: 
 //* Complete in O(n) time and O(n) space 
 //*
 //*/

//  var my_array = [3,4,6,10,11,15,21];
//  var another_array = [1,5,8,12,14,19];

//  mergeArrays(my_array,another_array)

// // function mergeArrays(arr1, arr2) {
// // 	var fullLength = arr1.length + arr2.length;
// 	var sortedResult = new Array (fullLength);
	
// 	var ind1 = 0;
// 	var ind2 = 0;
// 	var indRes = 0;
	
// 	while(ind1 < arr1.length && ind2 < arr2.length){
// 		if(arr1[ind1] < arr2[ind2]){
// 			sortedResult[indRes] = arr1[ind1]
// 			ind1++;
// 			indRes++;
// 		}
// 		else{
// 			sortedResult[indRes] = arr1[ind2]
// 			ind2++;
// 			indRes++;
// 		}
// 	}
	
	
// 	while (ind1 < arr1.length)
//     {
//         sortedResult[indRes] = arr1[ind1]; 
//         ind1++;
//         indRes++;
//     }

//     while (ind2 < arr2.length)
//     {
//       		sortedResult[indRes] = arr1[ind2];
// 			ind2++;
// 			indRes++;
//     }

	
	
// 	console.log(sortedResult)	
// 	// while()
	

// }
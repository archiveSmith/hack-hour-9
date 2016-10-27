/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    var bigArr = [];
    function subArray(arr, bigArr){
        
        for(var i = 0; i < arr.length; i++){
            for(var index = 0; index <= i; index++){
                var subArr = [] 
                subArr.push(arr[i]);
            }
        }
    }
}

module.exports = maxSubarray;



// function maxSubarray(arr) {
//     var bigArr = [];
//     var resArr = [];
    
//     function subArray(arr, bigArr){
       	
//        	if(bigArr.length === 0){
//        		return bigArr;
//        	}
       	
//         for(var i = 0; i < arr.length; i++){
//         	var subArr = [] 
//             for(var index = 0; index <= i; index++){
//                 subArr.push(arr[index]);
//                 console.log("subarr ", subArr)
//             }
//             bigArr.push(subArr)
//             console.log(bigArr)
//         }
//         subArray(arr.slice(1), bigArr)git 
//     }
    
//     resArr = subArray(arr,bigArr);
//     console.log(resArr)
    
    
// }
    
//     var arr = [15,20,-5,10]
//     // console.log(arr.slice(1))
//     // bigArr = [];
//     maxSubarray(arr)
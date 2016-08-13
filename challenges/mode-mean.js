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
  var mean = 0;
  var mode = 0;
  var counter = 0;
  
  for (var i = 0;i < array.length;i++){
    if (isNaN(array[i])){
      return "Only numbers pwease(not a miss spelling)";
    }
    mean += array[i];
    
    var tempCounter = 0;
    
    for (var j = 0;j < array.length;j++){
      if (array[i] === array[j]){
        tempCounter++;
      }
    }
    if (tempCounter > counter){
      mode = array[i];
      counter = tempCounter;
    }
  }
  
  mean = Math.floor(mean / array.length);
  
  return mode === mean ? true : false;

}

module.exports = modemean;

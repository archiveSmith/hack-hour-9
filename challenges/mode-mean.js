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
  let sortedArr = array.sort((a,b) => {return a-b;});
  let half = Math.floor(sortedArr.length/2);
  let mean = 0;
  let mode = 0;
  let modeTracking = {};
  let max = 0;
  let min = 0;

  console.log(half);
  if (sortedArr.length % 2) {
    mean = sortedArr[half];
  } else {
    mean = (sortedArr[half-1] + sortedArr[half]) / 2.0;
  }

  sortedArr.forEach(function(item) {
    if (!modeTracking[item]){
      modeTracking[item] = 0;
      modeTracking[item] += 1;
      console.log(modeTracking);
    } else {
      modeTracking[item] += 1;
    }
  });

  for( let num in modeTracking) {
    if( modeTracking[num] < min) min = modeTracking[num];
    if( modeTracking[num] > max) max = modeTracking[num];
  }
  mode = max + 1;
  console.log(min,max);
  console.log(mode,mean);

  if (mean === mode) {
    return true;
  } else {
    return false;
  }
}

module.exports = modemean;

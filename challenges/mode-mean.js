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
  let sum = array.reduce( (prev, curr) => prev + curr );
  let mean = Math.floor(sum / array.length);
  // console.log(mean);
  let modeTable = {};
  for (var i = 0; i < array.length; i++) {
    if(!(array[i] in modeTable)){
      modeTable[array[i]] = 1;
    } else {
      modeTable[array[i]] += 1;
    }
  }
  modeKeyArray = Object.keys(modeTable);
  let mode = null;
  let highCount = 0;
  for (var i = 0; i < modeKeyArray.length; i++) {
    let tempKeyVal =  modeTable[modeKeyArray[i]];
    if (tempKeyVal > highCount) {
      mode = modeKeyArray[i];
      highCount = tempKeyVal;
    }
  }
  // console.log(mode);
  if (mean == mode){
    return true;
  } else{
    return false;
  }


}
modemean([1,3,4,8,2,5,3,7,8,6,3,4,7,3,23])
module.exports = modemean;

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
  const modeObj = {};
  let mean = 0;
  let mode = 0;
  let i;
  let k;
  let cur = 0;
  for (i = 0; i < array.length; i++) {
    mean += array[i];
    if (modeObj[array[i]]) {
      modeObj[array[i]]++;
    } else {
      modeObj[array[i]] = 1;
    }
  }
  mean = Math.floor(mean / array.length);
  for (k in modeObj) {
    if (modeObj[k] >= cur) {
      mode = k;
      cur = modeObj[k];
    }
  }
  if (Number(mode) === mean) {
    return true;
  } else {
    return false;
  }
}

module.exports = modemean;

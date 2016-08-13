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
  let sum = 0;
  let numCache = {};
  let modeCount = 0;
  let mode;
  let mean;

  array.forEach(num => {
    sum += num;
    if (numCache[num]) {numCache[num]++}
    else {numCache[num] = 1}
  });

  mean = Math.floor(sum / array.length);

  for (let key in numCache) {
    if (numCache[key] > modeCount) {
      modeCount = numCache[key];
      mode = Number(key);
    }
  }
  return mean === mode;
}

module.exports = modemean;

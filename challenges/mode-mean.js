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
  if (!array.every((item) => typeof item === 'number') && array.length) {
    console.log("please provide an array of numbers ")
    return false;
  }
  const mode = Math.max(...getMode(array));
  const mean = getMean(array);
  return mode === mean;






  function getMode(arr) {

    let max = 0;
    let freqTable = arr.reduce((memo, item) => {
      if (memo[item]) {
        memo[item]++;
        if (memo[item] > max) {
          max = memo[item];
        }
      } else {
        memo[item] = 1;
        if (max === 0) {
          max = 1;
        }
      }
      return memo;
    }, {});

    var mode = [];
    Object.keys(freqTable).forEach(key => {
      if (freqTable[key] === max) {
        mode.push(key);
      }
    });
    return mode;
  }

  function getMean(arr) {
    return Math.floor(arr.reduce((memo, item) => memo + item) / arr.length);
  }
}

module.exports = modemean;
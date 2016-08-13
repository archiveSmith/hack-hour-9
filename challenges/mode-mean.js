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
  const averages = getModeAndMean(array);

  if (!averages) return undefined;
  else return averages.mode === averages.mean;
}

/**
 * Determines the mean and mode of an array of numbers.
 * If the mean is not an integer, the returned mean is floored.
 * Produces the greatest mode if there are multiple modes.
 * 
 * @param array: The array to find the mean and mode of
 * @return an object of the form {mode: <mode>, mean: <mean>}
 * @return undefined if any of the elements of array are not numbers
 */
function getModeAndMean(array) {
  if (array.some(item => typeof item !== 'number')) return undefined;

  const histogram = {};
  let total = 0;

  array.forEach(number => {
    histogram[number] ? histogram[number]++ : histogram[number] = 1;
    total += number;
  });

  const mean = Math.floor(total / array.length);
  const mode = getMode(histogram);
  
  console.log(histogram);

  return {mode, mean};
}

/**
 * @param  histogram {object} The keys are numbers and values
 * are frequencies corresponding to those numbers
 * 
 * @return {number} the key from histogram corresponding to the 
 * greatest value. If there are multiple such keys, return the
 * greatest of the keys.
 */
function getMode(histogram) {
  let greatestMode = -Infinity;
  let greatestFrequency = 0;

  Object.keys(histogram).forEach(number => {
    const frequency = histogram[number];

    if (frequency > greatestFrequency) {
      greatestMode = number;
      greatestFrequency = frequency;
    } else if (frequency === greatestFrequency && number > greatestMode) {
      greatestMode = number;
    }
  });

  return parseFloat(greatestMode);
}

module.exports = modemean;


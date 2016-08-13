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

  let storage = {};
  let mean = Math.round(array.reduce( (a, b) => a + b) / array.length);

  let mode = 0; 
  let largestMode = 0;
  let times = 0;

  array.forEach( (item) => {
    if(!storage[item]) {
      storage[item] = 1;
    } else {
      storage[item]++;
    }

  });


  for (let key in storage) {
    if(storage[key] >= times ) {
    times = storage[key];
    largestMode = key;
    mode = Math.max(largestMode, key);
    }
  }
  
  //console.log("mean", mean)
  //console.log("mode", mode);
  
  //console.log(storage)
  
  return Number(mode) === mean;


}

console.log(modemean([4,4, 1,1,1,1]));

module.exports = modemean;

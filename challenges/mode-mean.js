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
    //create hash table of all values.
    var hash = {};
    //loop through array to create hashtable. 
    for (var i = 0; i < array.length; i++) {
        //if obj.curr already exists increment value.
        if (array[i] in hash) {
            hash[array[i]]++
        } else {
            hash[array[i]] = 1;
        }
    }
    //loop through all values in hash table
    //create var which sets the key to the largest number
    //set mode as the key for the largest key value. 
    var mostFreq = 1;
    var mode
    for (key in hash) {
        if (hash[key] > hash[mostFreq]) {
            mostFreq = hash[key]
            mode = key;
        }
    }
    //determine mean (avg)
    var mean = Math.floor(array.reduce(function(prev, curr) {
        return prev + curr
    }) / array.length);
    //return true false if mean and mode are equal.
    return mode === mean 
}



module.exports = modemean;

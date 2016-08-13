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
let mean;
let modeMax = 0; 
let mode = [];
let modeObj = {}; 
let count = 0;
//sadassada
//create mean
mean = Math.floor(count / array.length);


//create modes
array.forEach(function(element) {
	count += element; 
	if(modeObj[element]) {
		modeObj[element] += 1; 
		mode.push(element); 
	}	
	else {
		modeObj[element] = 1; 
	}
});

//check if no modes
if(mode.length === 0) {
	mode = Math.max(array);
	return mode === mean ? true : false; 
}

//loop through modes 
for(let prop in modeObj) {
	if(modeObj[prop] > modeMax) {
		modeMax = modeObj[prop]; 
	}
}

return modeMax === mean ? true : false; 
//Finished
}

module.exports = modemean;

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
	// get the sum of all array items
	const arraysum = array.reduce(function(sum, current, index){
		return sum + current;
	})
	//divide sum by length to get mean
	let mean = arraysum / array.length;
	
	//array to keep track of how many times array[i] appears in array
	let itemcount = []
	let modearray = []
	
	//loop through array items and compare with other array items, keeping count of how many times a single value occurs (thisitemcount) -- function to be used at least twice.

		for(let i = 0; i < array.length; i++){
			let thisitemcount = 0;
		for(let j = 0; j < array.length; j++){
			if(array[i] === array[j]){
				thisitemcount++;
			}
		}
		//store a thisitemcount for each array element, so for array[i], itemcount[i] is how many times that item appears
		itemcount.push(thisitemcount);
		for (let k = 0; k < array.length; k++){
			//if an item's count is highest of all the itemcounts
			
			if (itemcount[k] === Math.max(...itemcount)){
				//if an item has one of the higher counts, push to mode array (it is a mode).
				modearray.push(array[k]);
			}
		}
	}
	
	//find the highest item count
	let maxmode = Math.max(...modearray)
		console.log("highestcount is" + maxmode)
	
	//find the value that has the highest item count by index
	// --> this only works for one mode. let modeindex = itemcount.indexOf(highestcount);
	

	if (maxmode === mean){
		return true;
	}
	else {return false;}

}

module.exports = modemean;

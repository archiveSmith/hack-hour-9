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
	//array to be populated with a mode or multiple modes
	let modearray = []
	
	//loop through array items and compare with other array items, keeping count of how many times a single value occurs (thisitemcount)

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
			//if an item's count value is highest (multiple matches)
			if (itemcount[k] === Math.max(...itemcount)){
				//get the values of the items with highest count
				modearray.push(array[k]);
			}
		}
	}
	//find the highest item count
	let maxmode = Math.max(...modearray);
		
	if (maxmode === mean){
		return true;
	}
	else {return false;}
}

console.log(modemean([1,2,2,2,3]))

module.exports = modemean;

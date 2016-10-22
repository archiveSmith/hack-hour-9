/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 *
 */



function modemean(array) {
	//Find mean
	
	//Find mean
	let length = array.length;
	let sum = 0;
	let mean;
	
	array.forEach(function(item){
		sum += item;
	})
	mean = Math.floor(sum / length);
	
	console.log(mean)



	//Find Mode//
	
	//Make Occurence Object
	let obj = {}
	array.forEach(function(item){
		if(!obj[item]){
			obj[item] = 1;
		}
		else{
			obj[item]++;
		}
	});

	//Find and return key with highest occurence from occurence objet
	let modeString;
	let modeOccurences = 0;
	for (let key in obj){
		if (obj[key] >= modeOccurences){
			modeOccurences = obj[key];
			modeString = key;
		}
	}
	let modenum = JSON.parse(modeString);

	
	if(modenum === mean){
		return true;
	}
	else{
		return false;
	}

}

module.exports = modemean;

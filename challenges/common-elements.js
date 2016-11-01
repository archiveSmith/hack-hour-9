// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(...args){

	let sortedArgs = args.sort( (a, b) => b.length - a.length);
	let intersects = [];
	
	for (let i = 0; i < sortedArgs[0].length; i++) {
		if( sortedArgs[1].includes(sortedArgs[0][i]) && sortedArgs[2].includes(sortedArgs[0][i]) && sortedArgs[3].includes(sortedArgs[0][i]) && !intersects.includes(sortedArgs[0][i])) {
			intersects.push(sortedArgs[0][i])
		}
	}

	return intersects.length ? intersects : "Nothing in Common!";

}

var array1 = [1,4,6,7,'ferrete',12,12,99,2000,'dog','dog',99,1000];
var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
var array4 = ['ferret',12,12,45,9,66,77,78,2000];
commonElements(array1, array2, array3, array4);

module.exports = commonElements;

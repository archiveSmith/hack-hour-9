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

function commonElements(array1, array2, array3, array4){
	let counter = {};
	let result = [];
	
	array1.forEach(item => {
		counter[item] = 1;
	});
	array2.forEach(item => {
		if(counter[item]) counter[item] = 2;
	});
	array3.forEach(item => {
		if(counter[item] === 2) counter[item] = 3;
	});
	array4.forEach(item => {
		if(counter[item] === 3) counter[item] = 4;
	});
	
	for(let item in counter) {
		if(counter[item] === 4) {
			result.push(item);
		}
	}
	if(result.length === 0) return 'Nothing in Common!';
	return result;
}

module.exports = commonElements;

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
	let matches = [];

	function uniq(array) {
  return array.sort().filter(function(item, pos, ary) {
	  return !pos || item != ary[pos - 1];
		})
	}

  array1 = uniq(array1)
  array2 = uniq(array2)
  array3 = uniq(array3)
  array4 = uniq(array4)

	let combo = array1.concat(array2).concat(array3).concat(array4).sort()
	let count = 1,
	prevChar = combo[0],
	currChar;
  for(let i = 1; i < combo.length; i++) {
    currChar = combo[i];
    
    if(currChar === prevChar) count++;
    
    if(currChar !== prevChar) count = 1;
    
    if(count === 4) matches.push(currChar);
    
    prevChar = combo[i];
  }
	
	return matches.length > 0 ? matches : 'Nothing in Common!'
}



module.exports = { commonElements };

/* eslint max-len: 0, prefer-rest-params: 0 */
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

function commonElements(array1, array2, array3, array4) {
// loop thru one array and store unique elements in an array
// compare against elements in next array to find the matching element(s), push these to a new array within this compare loop and
// eventually update the higher scoped array with these elements
// continue to do this until all 4 arrays are traversed
// then return the cache array, unless empty, then return 'nothing in common'

  let commonValues = [];
  for (let i = 0; i < arguments.length; i++) {
    // store elements that match commonValues of previous arrays
    const currentValues = [];
    const currentArr = arguments[i];

    // loop thru each array
    for (let j = 0; j < currentArr.length; j++) {
      if (i === 0 || commonValues.includes(currentArr[j])) {
        currentValues.push(currentArr[j]);
      }
    }
    // update list of common values
    commonValues = currentValues;
  }

  return commonValues;
}

module.exports = commonElements;

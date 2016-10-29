// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  var array11 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  var array22  = [15,9,9,'ferret',9,26,12,12,'dog'];
  var array33 = [23,12,12,77,'ferret',9,88,100,'dog'];
  var array44 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){
  const allTheArrays = [array1, array2, array3, array4];
  const outArr = [];
  for (let i = 0; i < allTheArrays.length; i++) {
    allTheArrays[i].forEach((item) => {
      if (array1.indexOf(item) !== -1 && array2.indexOf(item) !== -1 && array3.indexOf(item) !== -1 && array4.indexOf(item) !== -1) {
        if (outArr.indexOf(item) === -1) {
          outArr.push(item);
        }
      }
    });
  }
  return outArr.length - 1 < 1 ? 'Nothing in Common!' : outArr;
}


module.exports = commonElements;

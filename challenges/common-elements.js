// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appconst in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

// const array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// const array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// const array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// const array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4) {
  const outputArr = [];
  const outputStr = 'Nothing in Common!';
  const obj1 = {};
  const obj2 = {};
  const obj3 = {};
  const obj4 = {};
  const length = Math.max(array1.length, array2.length, array3.length, array4.length);
  const object = (array1.length === length) ? obj1 :
    array2.length === length ? obj2 :
      array3.length === length ? obj3 :
        array4.length === length ? obj4 : false;
  for (let i = 0; i < length; ++i) {
    if (!obj1[array1[i]]) {
      obj1[array1[i]] = array1[i];
    }
    if (!obj2[array2[i]]) {
      obj2[array2[i]] = array2[i];
    }
    if (!obj3[array3[i]]) {
      obj3[array3[i]] = array3[i];
    }
    if (!obj4[array4[i]]) {
      obj4[array4[i]] = array4[i];
    }
  }
  for (let key in object) {
    if (obj1[key] && obj2[key] && obj3[key] && obj4[key]) {
      outputArr.push(object[key]);
    }
  }
  if (outputArr.length > 0) {
    return outputArr;
  }
  return outputStr;
}

module.exports = commonElements;


// tests
// const array1 = [1, 4, 6, 7, 'ferret', 12, 12, 99, 2000, 'dog', 'dog', 99, 1000];
// const array2 = [15, 9, 9, 'ferret', 9, 26, 12, 12, 'dog'];
// const array3 = [23, 12, 12, 77, 'ferret', 9, 88, 100, 'dog'];
// const array4 = ['ferret', 12, 12, 45, 9, 66, 77, 78, 2000];

// console.log(commonElements(array1, array2, array3, array4));

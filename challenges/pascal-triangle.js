/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  let mainArray = [];
  let counter = 0;
  let rowArray = [1];
  while (counter <= numRows) {
    if (counter === 0) {
      let prev = rowArray.slice(0)
    }
    else {
      prev = temp.slice(0);
    }
    mainArray.push(temp);
    for (let i = 1; i < rowArray.length; i++) {
      temp[counter] = prev[counter - 1] + prev[counter + 1]
    }
    temp.push(1);
    counter++;
  }
  return mainArray;
}

module.exports = pascalTriangle;

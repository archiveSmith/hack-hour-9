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
  let result = [[1]];
  if (numRows === 1) return result;
  result.push([1, 1]);
  if (numRows === 2) return result;
  for (let i = 1; i < numRows - 1; i += 1) {
    let prevAr = result[i];
    let newAr = [1];
    for (let j = 0; j < prevAr.length; j += 1) {
      if (j === prevAr.length - 1) {
        newAr.push(prevAr[j]);
      } else {
        newAr.push(prevAr[j] + prevAr[j + 1]);
      }
    }
    result.push(newAr);
  }
  return result;
}

module.exports = pascalTriangle;

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
  if (numRows === 1) return [[1]];
  if (numRows === 0) return [];
  if (numRows === 2) return [[1], [1,1]];

  let prevTriangle = pascalTriangle(numRows - 1);
  let maxRow = prevTriangle[prevTriangle.length - 1];
  let newRow = [];

  for (let i = 0; i < maxRow.length + 1; i++) {
    if (i === maxRow.length) newRow.push(1);
    else newRow.push(maxRow[i] + (maxRow[i - 1] || 0));
  }
  prevTriangle.push(newRow);

  return prevTriangle;
}

module.exports = pascalTriangle;

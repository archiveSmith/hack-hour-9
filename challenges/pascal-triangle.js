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
  if (numRows === 2) return [[1, 1]];

  const outTriangle = [[1], [1, 1]];
  let lastTriangle = [1, 1];

  for (let i = 0; i < numRows - 2; i++) {
    const newTriangle = [1];
    for (let j = 0; j < lastTriangle.length - 1; j++) {
      const newNum = lastTriangle[j] + lastTriangle[j + 1];
      newTriangle.push(newNum);
    }
    newTriangle.push(1);
    lastTriangle = newTriangle;
    outTriangle.push(newTriangle);
  }
  return outTriangle;
}


module.exports = pascalTriangle;

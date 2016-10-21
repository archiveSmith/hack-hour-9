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

function buildRow(input) {
  const output = [1];
  for (let i = 0; i < input.length; ++i) {
    const newNum = input[i];
    if (input[i + 1] === undefined) {
      output.push(newNum);
    } else {
      output.push(newNum + input[i + 1]);
    }
  }
  return output;
}

function pascalTriangle(numRows) {
  const output = [[1]];
  if (numRows === 1) return output;
  for (let i = 0; i < numRows - 1; ++i) {
    output.push(buildRow(output[i]));
  }
  return output;
}

// // tests
// console.log(pascalTriangle(1), 'should be [[1]]');
// console.log(pascalTriangle(2), 'should be [[1], [1,1]]');
// console.log(pascalTriangle(3), 'should be [[1], [1,,1], [1,2,1]]');
// console.log(pascalTriangle(6), 'should be [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1], [1,5,10,10,5,1]]');
// console.log(pascalTriangle(10));

module.exports = pascalTriangle;

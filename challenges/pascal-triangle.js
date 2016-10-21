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
  if (typeof numRows !== 'number') return [];
  if (isNaN(numRows)) return [];
  if (numRows < 1) return [];
  
  if (numRows === 1) return [[1]];
  
  const result = pascalTriangle(numRows - 1);
  const nextRow = result[result.length - 1].reduce((row, _, i, prevRow) => {
    row.push(
      prevRow[i + 1] ?
        prevRow[i] + prevRow[i + 1] :
        prevRow[i]
    );

    return row;
  }, [1])
  
  result.push(nextRow);
  return result;
}

for (let i = 1; i < 10; i++) {
  console.log(pascalTriangle(i));
}

module.exports = pascalTriangle;

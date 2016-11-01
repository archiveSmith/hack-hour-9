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
 
 if(numRows === 0) return [];
 if(numRows === 1) return [[1]];

 for(let i = 0; i < numRows-1; i++) {
 	let subArr = [1];
 	let temp = result[i]
 	for(let j = 0; j < temp.length; j++) {
 		subArr.push(temp[j] + (temp[j+1] || 0));
 	}
 	result.push(subArr);
 }
 return result;

}

pascalTriangle(5)

module.exports = pascalTriangle;

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

function pascalTriangle(numRows, tri = []) {
  if (tri.length >= numRows) {
    return tri;
  }
  if (tri.length === 0) {
    tri.push([1])
  } else if (tri.length === 1) {
    tri.push([1, 1]);
  } else {
    let res = [],
      prev = tri[tri.length - 1],
      val,
      i,
      len;
    for (i = 0, len = tri[tri.length - 1].length; i <= len; i++) {
      if (i === len || i === 0) {
        val = 1;
      } else {
        val = prev[i - 1] + prev[i];
      }
      res.push(val);
    }
    tri.push(res);
  }
  return pascalTriangle(numRows, tri);
}



// wtf is pascal's triangle?


// step 1: clarify

/*
  Construct Pascal's Triangle up to n levels deep, 
  starting from n = 1. 
  Each row
  is represented as an array of numbers.
  Return an empty array if the input is invalid.
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


step 2: get it working however possible  


// strategy iterate with two loops
function pascalTriangle1(numRows) {

  // handle invalid inputs
  if (!numRows || numRows < 1) return [];

  // there is at least one row - let's add it
  var triangle = [[1]];
  var row;

  // 'j' will be the index of the PREVIOUS row in the triangle
  for (var j = 0; j < numRows - 1; j++) {
    // row will be our CURRENT row, and all rows begin with a 1
    row = [1];

    // 'k' will be the index of each element in a given row
    // start from k = 1 because the index 0 is already added
    // we iterate until we are where the previous row ends.
    // on each iteration we add two values from the previous row
    for (var k = 1; k < triangle[j].length; k++) {
      row[k] = triangle[j][k] + triangle[j][k - 1];
    }
    // push the trailing 1 to complete the row
    row.push(1);
    triangle.push(row);
  }

  return triangle;
}


it seems like it builds on itself with each call 
hmmmm.....

// strategy: recurersion baby!
function pascalTriangle2(n, triangle) {
  if (!n || n < 1) return [];

  triangle = triangle || [[1]]

  // base case : n is 1. 
  if (n === 1) return triangle;

  // recursive case: start by creating new row - initial value is 1
  var row = [1];
  var prevRow = triangle[triangle.length - 1];

  for (var i = 1; i < prevRow.length; i++) {
    row.push(prevRow[i] + prevRow[i - 1]);
  }
  row.push(1);
  triangle.push(row);
  // at the end of the recursive case, make the recursive call with n-1
  // keep in mind, n is only used as a counter. we build from triangle, which
  // will start from [[1]]
  return pascalTriangle2(n - 1, triangle);
}


pascalTriangle1()
pascalTriangle2();


module.exports = pascalTriangle;

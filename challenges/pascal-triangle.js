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

module.exports = pascalTriangle;

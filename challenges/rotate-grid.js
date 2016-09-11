/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  // start with not in place solution

  // initialization
  var output = [];
  for(var k = 0; k < n; k++) {
    output[k] = [];
  }

  for(var i = 0; i < n; i++) {
    // process each row
    currRow = grid[i];

    for(var j = 0; j < n; j++) {
      // translate each row to column
      output[j].unshift(currRow[j]);
    }
  }

  return output;
}

/* tests */
/*
var row1 = [1, 2, 3];
var row2 = [4, 5, 6];
var row3 = [7, 8, 9];
var grid = [];
grid.push(row1);
grid.push(row2);
grid.push(row3);

console.log('grid before', grid);
console.log('grid after', rotateGrid(grid, 3));
*/

module.exports = rotateGrid;

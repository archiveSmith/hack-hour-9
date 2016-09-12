/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * Write a function to rotate the grid 90 degrees clockwise. 
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  rotateGrid(sampleGrid, 3);
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  const rotated = [];
  for (let i = n; i > 0; i--) {
    for (let x = 0; x < grid[i - 1].length; x++) {
      if (rotated[x]) {
        rotated[x].push(grid[i - 1][x]);
      } else {
        rotated[x] = [];
        rotated[x].push(grid[i - 1][x]);
      }
    }
  }
  return rotated;
}

// tests
const sampleGrid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(sampleGrid);
rotateGrid(sampleGrid, 2);


module.exports = rotateGrid;

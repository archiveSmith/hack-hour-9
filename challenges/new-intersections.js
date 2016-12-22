/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points directly above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 * 	 
 */

function newIntersections(x, y){
   // O(2n^2)
      var verticals = createVerticals();
      var horizontals = createHorizontals();

      // O(2n)
      rangify(verticals);
      rangify(horizontals);

      var count = 0;

      // O(n^2)
      for (var y in horizontals) {
         var xRange = horizontals[y];

         for (var x in verticals) {
          var yRange = verticals[x];
           // keep count of those that are bounded on all 4 sides
           if (x > xRange[0] && x < xRange[1] && y > yRange[0] && y < yRange[1]) {
       count++;
           }
         }
      }
      return count;
}

function rangify(lines) {
    for (var key in lines) {
        lines[key] = [Math.min.apply(this,lines[key]),
                      Math.max.apply(this,lines[key])];
    }
};

function createVerticals(arrayX, arrayY) {
    var verticals = {};

    // count() counts the number of times each key appears in the array
    var counts = count(arrayX);
    for (var c in counts) {
        for (var i in arrayX) {
            if (arrayX[i] == c) {
                verticals[c] = (verticals[c] || []).concat(arrayY[i]);
            }
        }
    }
    return verticals;
}

module.exports = newIntersections;

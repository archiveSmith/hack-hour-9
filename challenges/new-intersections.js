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
  let len = x.length;
  let xes = {};
  let ys = {};
  for (let i = 0; i < len; i++) {
    let xcoord = x[i];
    let ycoord = y[i];
    if(xes[xcoord]){
      xes[xcoord].push(ycoord);
    }
    else {
      xes[xcoord] = [ycoord];
    }
    if(ys[ycoord]){
      ys[ycoord].push(xcoord);
    }
    else {
      ys[ycoord] = [xcoord];
    }
  }
  for(xc in xes){
    if (xes[xc].length < 2){
      delete xes[xc];
    }
  }
  for (yc in ys){
   if (ys[yc].length < 2){
      delete ys[yc];
    }
  }

  console.log(xes);
  console.log(ys);

}

// module.exports = newIntersections;

newIntersections([2,5,6,2,3], [4,0,9,1,0]);
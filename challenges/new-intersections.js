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
	var vert = {};
	var horiz = {};
	var intersectionCount = 0;

  //make objects if there are multiple x or y coordinates
	for (var i = 0; i < x.length; i++){
		if (x.slice(i+1).indexOf(x[i]) !== -1 || (Object.keys(vert).indexOf(JSON.stringify(x[i])) !== -1)){
			if (!vert[x[i]]){
				vert[x[i]] = [y[i]];
			} else {
				vert[x[i]].push(y[i]);
			}
		}
	}
	
	for (var j = 0; j < y.length; j++){
		if (y.slice(j+1).indexOf(y[j]) !== -1 || (Object.keys(horiz).indexOf(JSON.stringify(y[j])) !== -1)){
			if (!horiz[y[j]]){
				horiz[y[j]] = [x[j]];
			} else {
				horiz[y[j]].push(x[j]);
			}
		}
	}
	
  //get min & max range of coordinates sharing same x or y. If vert's key is within the range of horiz's value & if horiz's key is within the range of vert's value, there is an intersection
	for (var key in vert){
		for (var k in horiz){
			if (parseInt(key) > Math.min(...horiz[k]) && parseInt(key) < Math.max(...horiz[k])){
				if(parseInt(k) > Math.min(...vert[key]) && parseInt(k) < Math.max(...vert[key])){
					intersectionCount++;
				}
			}
		}
	}
	return intersectionCount;
}

module.exports = newIntersections;

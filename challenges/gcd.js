/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
function gcd(a, b) {
  var higher;
  var lower;
  //determine which one's higher
  if (Math.abs(a)>Math.abs(b)){
    higher = a;
    lower = b;
  }
  else{ 
    higher = b;
    lower = a;
  }
  var diff = Math.abs(higher) - Math.abs(lower);
  var start;
	if (Math.abs(lower) > diff){
		start = diff;
	}
	else {
		start = Math.abs(lower);
	}

  for(let i = start; i >= 1; Math.floor(i / counter)){
  	
    if (higher % i === 0 && lower % i === 0){
      return i;
    }
    counter ++;
    if (counter > 2 && counter % 2 === 0){
    	counter ++;
    }
    if (counter > 3 && counter % 3 === 0){
    	counter ++;
    }
  }
  return 'none found';
}

// gcd(1000000000004, 1000000000002)


module.exports = gcd;
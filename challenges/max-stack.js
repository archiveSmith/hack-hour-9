/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {

  // keeps track of length, initialized at zero
  this.length = 0; 
  
  // keeps track of max value in stack, initialized at negative infinity
  this.max = -Infinity;
  
  // array to store data in stack
  this.data = [];
  
  this.push = function(val) {
	  // error handling
	  if(val === undefined || Number.isNaN(val)) {
		  return undefined;
	  }
	  
	  // add a value to end of array and post increment length
	  this.data.push(val);
	  this.length++;
	  
	  // check if val greater than max, if so reassign max
	  if(val > this.max) {
		  this.max = val;
	  }
	  
	  return this.length;	  
  }
  
  this.pop = function() {
	  // error handling
	  if(! this.length) {
		  return undefined;
	  }
	  
	  // pre decrement length, and grab the last element from data array
	  var output = this.data.pop();
	  --this.length;
	  
	  // if output contains the max value - need to update max
	  if(output === this.max) {
		  this.max = this.data.reduce(function(prev, curr) {
			  if(curr > prev) {
				  return curr;
			  } else {
				  return prev;
			  }
		  }, -Infinity);
	  }
	  	  
	  return output;
  }
  
  // retrieve max in O(1)
  this.getMax = function() {
	  if(! this.length) {
		  return undefined;
	  }
	  
	  return this.max;
  }
   
}

/* tests */
/*
var s = new Stack();
console.log(s.length);

s.push(3);
s.push(0);
s.push(-1);
s.push(5);

console.log('s', s.getMax(), s.length, s.data);

s.pop();
console.log('s1', s.getMax(), s.length, s.data);
*/

module.exports = Stack;
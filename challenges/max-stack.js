/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
    this.value = [];
}
Stack.prototype.push = function(val){
    this.value.push(val);
    return this.value.length;  
  };
Stack.prototype.pop = function(){
    const popped = this.value.pop();
    return popped;
  };
Stack.prototype.getMax = function(){
	let temp = 0;
	for (let num of this.value){
		if (num > temp) temp = num;
	}
	return temp;
};



// function Stack() {
//   // body...
//     return [];
// }
// Array.prototype.pushh = function(val){
//     this[this.length] = val;
//     return this.length;  
//   };
// Array.prototype.popp = function(){
//     const popped = this[this.length-1];
//     delete this[this.length-1];
//     return popped;
//   };
// Array.prototype.getMax = function(){
// 	let temp = 0;
// 	for (let num of this){
// 		if (num > temp) temp = num;
// 	}
// 	return temp;
// };
module.exports = Stack;
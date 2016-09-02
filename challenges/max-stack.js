/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
	constructor() {
		this.storage = [];
		this.greatest = -Infinity;	
	}

  push(val) {
    this.greatest = Math.max(this.greatest, val);
    this.storage[this.storage.length] = val;
    return this.storage.length;
  }

  pop() {
    
    let popped = this.storage.splice(-1)[0];
    if(this.greatest === popped) {
      this.greatest = -Infinity;
      for (let i = 0; i < this.storage.length; i++) {
        this.greatest = Math.max(this.greatest, this.storage[i]);
      }
    }
    return popped;
  }

  getMax() {
    return this.greatest;	
  } 

}

module.exports = Stack;
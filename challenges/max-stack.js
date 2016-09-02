/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.length = 0;
  this.contents = {};
  this.empty = -1;
  this.max = undefined;
}

Stack.prototype.push = function(value){
  if (typeof value !== 'number'){
    return 'not a number';
  }
  this.contents[this.length] = value;
  if (!this.max || value > this.max){
    this.max = value;
  }
  this.length++;
  this.empty++
  return this.length;
}


Stack.prototype.pop = function(){
  if (this.empty === -1){
    return undefined;
  }
  output = this.contents[this.length-1];
  delete this.contents[this.length-1];
  if (output === this.max){
    this.max = undefined;
    for (let key in this.contents){
      if (!this.max || this.contents[key] > this.max){
        this.max = this.contents[key];
      }
    }
  }
  this.length--;
  this.empty--;
  return output;
}

Stack.prototype.getMax = function(){
  return this.max;
}

// test casses
// let arr = new Stack();

// console.log('length should be 1', arr.push(1));
// arr.push(2);
// console.log('length should be 3', arr.push(3));
// console.log('last push',arr.push(4));

// console.log('first max' ,arr.getMax());

// console.log('pop',arr.pop());
// console.log('second max',arr.getMax());
// console.log('not a number', arr.push([]));


module.exports = Stack;
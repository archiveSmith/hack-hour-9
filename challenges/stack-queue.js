/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function () {
  var output = this.storage[this.index - 1];
  this.storage[this.index - 1] = undefined;
  this.index--;
  return output;
};

/**
* Queue Class FIFO
*/

function Queue() {
  this.a = new Stack();
  this.b = new Stack();
  this.enqueue = function(input){
    this.a.push(input);
  };
  this.dequeue = function() {
    var e = this.a.index; 
    while(e > 0){
      var apop = this.a.pop();
      this.b.push(apop);
      e -=1;
    }
    this.b.pop();
    // put items back in a.
    while (e <= this.b.index) {
      var bpop = this.b.pop();
      this.a.push(bpop);
      e+=1;
    }
  };
}

module.exports = {Stack: Stack, Queue: Queue};

/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.stack = [];
  this.length = 0;
  
  this.push = (data) => {
    this.stack[this.length] = data;
    this.length++;
  }
  
  this.pop = () => {
  	if(this.length === 0) return undefined;
    const result = this.stack[this.length - 1];
  	delete this.stack[this.length - 1];
    this.length--;
    return result;
  }
}


/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};

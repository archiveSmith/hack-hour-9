/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    //case for no list
    if (!head) {return null;}
    let llArr = [];
    let currHead = head;
    while(currHead){
        llArr.push(currHead.value);
        currHead = currHead.next;
    }
    let toBeReversed = llArr.reverse();
    let revLL = new Node(toBeReversed[0]);
    let tempHead = revLL;
    let tempTail = revLL;
    for (let i = 1; i < toBeReversed.length; i++){
    	let temp = new Node(toBeReversed[i]);
    	tempTail.next = temp;
    	tempTail = tempTail.next;
    }
     return revLL;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

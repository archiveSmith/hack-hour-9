/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */
function Node(val) {
    this.value = val;
    this.next = null;
}

function kthToLastNode(k, head) {
    let current = head;
    let output;
    let length = 0;
    //loop through list to identify length;
    while (current !== null) {
        current = current.next;
        length++
    }
    //update length to be - k so that it finds the nth to the last. 
    length = length - k;
    //reset current to be head. 
    current = head;
    //loop through list again to determine the output value. 
    while (length > 0) {
        current = current.next;
        output = current.value;
        console.log(current);
        length--
    }
    return output;
}

module.exports = { Node: Node, kthToLastNode: kthToLastNode };

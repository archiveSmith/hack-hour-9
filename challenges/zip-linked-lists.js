/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}
//loop through l1 and l2
//grab l1 set it to the first node
//grab l2 set it to the second node
//grab l1.next set it to the third node
//grab l2.next set it to the fourth node
function zip(l1, l2) {
  let outLL = l1;
  let templ1 = l1.next;
  let templ2 = l2.next;

//l1
//l2
//
  while (l1 !== null && l2 !== null){
    l1 = l1.next;
    outLL.next = l2;
    outLL = outLL.next;
    l2 = l2.next;
    outLL.next = l1;
    outLL = outLL.next;

  }

  while(l2 !== null){
    outLL.next = l2;
    outLL = outLL.next;
    l2 = l2.next;
  }
  return outLL;
};

tenNode = new Node(10);
elevenNode = new Node(11);
twelveNode = new Node(12);

tenNode.next = elevenNode;
elevenNode.next = twelveNode;

oneNode = new Node(1);
twoNode = new Node(2);
threeNode = new Node(3);

oneNode.next = twoNode;
twoNode.next = threeNode;

console.log(zip(tenNode,oneNode));
console.log('oneNode = ', oneNode);
console.log('tenNode = ', tenNode);

module.exports = {Node: Node, zip: zip};

/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

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

function zip(l1, l2) {
	//push node values to 2 arrays
	//then zip arrays
	//then re-create LinkedList.

	const l1array = [];
	const l2array = [];
	
	for(let i = 1, x = l1; x != null; i++){
		l1array.push(x.value)
		x = x.next;
	}
	for(let j = 1, y = l2; y != null; j++){
		l2array.push(y.value);
		y = y.next;
	}

	for(let k = 0, l=1; k < l2array.length; k++, l+=2){
		l1array.splice(l,0,l2array[k])
	}
		// console.log('l1 length is ' + l1array, 'l2 is ' + l2array);
		
	// let nextNode = {};
	
	// // for(let u = 0; u<l1array.length; u++){
	// // 	nextNode = new Node(l1array[u]);
	// // 	var a = nextNode;
		
	
	// // }
	// console.log(newList)
	var happy = l1array.reduce(function(all, item){
		// console.log(all)
		var x = all;
		if (Object.keys(all).length === 0){x = new Node(item); console.log(x)}
		else{
			x['next'] = new Node(item);
		}
		all = x;
		console.log(all)
		return all;
	}, {})
	console.log(happy)
	
	
};


// var l1 = new Node(10);
// l1.next = new Node(11);
// l1.next.next = new Node(12);
// l1.next.next.next = new Node(13);
// l1.next.next.next.next = new Node(14);
// var l2 = new Node(20);
// l2.next = new Node(21);
// l2.next.next = new Node(22);

// zip(l1, l2)

module.exports = {Node: Node, zip: zip};

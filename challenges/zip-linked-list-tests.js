const {Node, zip} = require('./zip-linked-lists');

function assert(condition) {
  if (!condition) throw new Error();
}

function listFromArray(array) {
  const result = new Node(array[0]);

  let iterator = result;
  for (let i = 1; i < array.length; i++, iterator = iterator.next) {
    iterator.next = new Node(array[i]);
  }

  return result;
}

const head1 = new Node('1a');
head1.next = new Node('1b');
head1.next.next = new Node('1c');

const head2 = new Node('2a');
head2.next = new Node('2b');
head2.next.next = new Node('2c');
head2.next.next.next = new Node('2d');
head2.next.next.next.next = new Node('2e');

//Zip them
const zipped = zip(head1, head2);

// for(let iterator = zipped; iterator; iterator = iterator.next) {
//   console.log(iterator.value);
// }

const head3 = listFromArray([1, 2, 3, 4, 5, 6, 7]);
const head4 = listFromArray([10, 11]);

const zipped2 = zip(head3, head4);
// for(let iterator = zipped2; iterator; iterator = iterator.next) {
//   console.log(iterator.value);
// }

const zipped3 = zip(head3, null);
const zipped4 = zip(null, head4);
for(let iterator = zipped3; iterator; iterator = iterator.next) {
  console.log(iterator.value);
}
for(let iterator = zipped4; iterator; iterator = iterator.next) {
  console.log(iterator.value);
}

assert(zip(null, null) === undefined);

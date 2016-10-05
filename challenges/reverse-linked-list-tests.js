const expect = require('chai').expect;
const {Node, reverseLinkedList} = require('./reverse-linked-list');

function listFromArray(array) {
  const result = new Node(array[0]);

  let iterator = result;
  for (let i = 1; i < array.length; i++, iterator = iterator.next) {
    iterator.next = new Node(array[i]);
  }

  return result;
}

describe('reverseLinkedList', function() {
  let head;

  beforeEach(function() {
    head = listFromArray([1, 2, 3, 4, 5]);
  });

  describe('edge case handling', function() {
    it('should return null if the argument is null', function() {
      expect(reverseLinkedList(null)).to.be.null;
    });

    it('should return undefined if no argument is given', function() {
      expect(reverseLinkedList()).to.be.undefined;
    });

    it('should return the same list if the list has length 1', function() {
      expect(reverseLinkedList(new Node(3)).value).to.equal(3);
    });

    it('should correctly reverse the linked list if the list has length 2', function() {
      let list = listFromArray([1, 2]);
      list = reverseLinkedList(list);
      expect(list.value).to.equal(2);
      expect(list.next.value).to.equal(1);
      expect(list.next.next).to.be.null;
    })
  })

  it('should reverse the linked list in place', function() {
    head = reverseLinkedList(head);
    expect(head.value).to.equal(5);
    expect(head.next.value).to.equal(4);
    expect(head.next.next.value).to.equal(3);
  });

  it('should return the new head of the list', function() {
    const head2 = reverseLinkedList(head);
    expect(head2.value).to.equal(5);
    expect(head2.next.value).to.equal(4);
  })
});

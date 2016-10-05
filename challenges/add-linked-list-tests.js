const expect = require('chai').expect;
const {addLinkedList, Node} = require('./add-linked-list');

describe('addLinkedList', () => {
  describe('normal functionality', () => {
    it('should correctly add two numbers of the same length', () => {
      const list = new Node(3);
      list.next = new Node(4);
      list.next.next = new Node(5);

      const list2 = new Node(8);
      list2.next = new Node(2);
      list2.next.next = new Node(1);

      const result
    })

    it('should correcly add two numbers of different lengths', () => {

    })
  })

  describe('edge case handling', () => {
    it('should return undefined if either linked list is undefined', () => {
      expect(addLinkedList(null, null)).to.be.undefined;
      expect(addLinkedList(null, new Node(3))).to.be.undefined;
      expect(addLinkedList(new Node(3), null)).to.be.undefined;
    })
  })
})

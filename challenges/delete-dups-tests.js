const expect = require('chai').expect;
const deleteDups = require('./delete-dups');

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

describe('deleteDups', () => {
  describe('normal functionality', () => {
    it('should remove duplicates', () => {
      let head = new Node(1);
      head.next = new Node(2);
      head.next.next = new Node(3);
      head.next.next.next = new Node(3);

      expect(head.next.next.next).to.not.be.null;

      head = deleteDups(head);
      expect(head.next.next.next).to.be.null;
    });

    it('should remove duplicates if the list is not sorted', () => {
      let head = new Node(3);
      head.next = new Node(1);
      head.next.next = new Node(3);
      head.next.next.next = new Node(2);

      head = deleteDups(head);

      expect(head.value).to.equal(3);
      expect(head.next.value).to.equal(1);
      expect(head.next.next.value).to.equal(2);
      expect(head.next.next.next).to.be.null;
    });
  });

  describe('edge case handling', () => {
    it('should return null if null is passed in', () => {
      expect(deleteDups(null)).to.be.null;
    });

    it('should not modify the list if there is one element', () => {
      let head = new Node(3);

      head = deleteDups(head);

      expect(head.value).to.equal(3);
      expect(head.next).to.be.null;
    });
  });
});

new Proxy({}, {
  get(target, property, receiver) {
    return target[property];
  }
});

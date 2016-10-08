/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */



 function deleteDups(head) {
        let prev = head;
        let current = head.next;
        let store = {};
        while(current) {
            if(store[current.val] === undefined) {
                store[current.val] = true;
            } else {
                prev.next = current.next;
            }
            prev = current;
            current = current.next;
        }
        return head;
    }

module.exports = deleteDups;

/**
 * Given head which is a reference node to a singly-linked list.
 * The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
 * Return the decimal value of the number in the linked list.
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * @param {ListNode} head
 * @return {number}
 */

var getDecimalValue = function(head) {
  const binary = [];
  while (head) {
    binary.push(head.val);
    head = head.next;
  };
  const binaryStr = binary.join('');
  return parseInt(binaryStr, 2);
};

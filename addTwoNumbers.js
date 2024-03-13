function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const addTwoNumbers = function(l1, l2) {

  // carry value is needed when addition of two values from list nodes is more than 9
  let carry = 0
  // setup a node that will hold a pointer to the last craeted node 
  let prevNode = new ListNode();
  // headNode stores the pointer to the frist created Node (You return this one at the end)
  const headNode = prevNode;

  //while loop will stop if both nodes are null and there is no value carried from last addition
  while (l1 || l2 || carry ) {

    // sum will be passed as a param to each new Node
    let sum = 0;

    // assume that inital value is 0, you need that in case where one of the list nodes is null
    let val1 = 0;
    let val2 = 0;

    // only if the current node is not null assign a value and move the pointer from the current
    // Node to the next node
    if (l1) {
      val1 = l1.val
      l1 = l1.next;
    }
    if (l2) {
      val2 = l2.val
      l2 = l2.next;
    }

    // handle the case where addition return number bigger than 10
    // sum the values of all variables and calculate the modulo of the sum, this is important
    // otherwise the sum paramaeter that is passed to a new will be double digit!
    if (val1 + val2 + carry > 9) {
      sum = val1 + val2 + carry;
      sum = sum % 10
      // of course is above statement was true, we need to carry/store 1 from the addition to be
      // added in the next loop
      carry = 1;
    } else {
      // if sum of three variables is not bigger than 9 we have simple addition and we reset the
      // carry to 0
      sum = val1 + val2 + carry;
      carry = 0;
    } 

    //create a new node and pass the calcualted sum to it 
    const currentNode = new ListNode(sum)

    //we need to store a pointer to this Shiny Node we created, as it will be used on the next loop
    //keep in mind that at the beggining we created new empty node prevNode that has no value or
    //next assigned to it. During first loop this prevNode will be assigned pointer to the new
    //shiny Node but it's value will be empty, this is why at the end we don't return the actual
    //headNode(the value will be 0), but the pointer to the next node that actual contains 
    //some value that is useful for us
    prevNode.next = currentNode;
    // finaly we reassign the nodes, and know prevNode becomes a new Shiny Node
    prevNode = currentNode
  }
  return headNode.next;
};

let linkedList1 = new ListNode(3);
let linkedList2 = new ListNode(1);
linkedList1.next = linkedList2;
let linkedList3 = new ListNode(6);
linkedList2.next = linkedList3;

let secondLinkedList1 = new ListNode(5)
let secondLinkedList2 = new ListNode(8)
secondLinkedList1.next = secondLinkedList2;
let secondLinkedList3 = new ListNode(3)
secondLinkedList2.next = secondLinkedList3;

console.log(addTwoNumbers(linkedList1, secondLinkedList1));


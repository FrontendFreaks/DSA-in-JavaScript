# Linked List in JavaScript

<p align="center">
  <a href="https://youtu.be/ATKPTiZgT3Q">
  <img src="https://img.youtube.com/vi/ATKPTiZgT3Q/0.jpg" alt="Linked List in JavaScript" />
  </a>
</p>

## Source Code
```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertAtHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    insertAt(index, data) {
        if (index < 0 || index > this.size) {
            return "Invalid Index"
        }

        if (index === 0) {
            this.insertAtHead(data)
            return;
        }

        let newNode = new Node(data)
        let temp = this.head;
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next;
        }

        newNode.next = temp.next;
        temp.next = newNode;

        this.size++;
    }

    print() {
        let result = ""
        let temp = this.head;
        while (temp) {
            result += `${temp.data}->`
            temp = temp.next;
        }
        return result
    }

    removeAtHead() {
        if (this.isEmpty()) {
            return "List is already empty"
        }

        this.head = this.head.next;
        this.size--;
    }

    removeElement(data) {
        if (this.isEmpty()) {
            return "List is already empty"
        }

        let current = this.head, prev = null;
        while (current) {
            if (current.data === data) {
                if (prev === null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element
            }
            prev = current;
            current = prev.next;
        }
        return -1;
    }

    searchElement(data) {
        let curr = this.head;
        let index = 0;

        while (curr) {
            if (curr.data === data) {
                return index;
            }
            index++;
            curr = curr.next;
        }
        return -1;
    }

    middleNode() {
        let slow = this.head, fast = this.head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    };

    reverse() {
        let prev = null, curr = this.head, next;
        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    isCycle() {
        let slow = this.head, fast = this.head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;

            if (slow === fast) {
                return true;
            }
        }
        return false;
    }

    isEmpty() {
        return this.size === 0;
    }
}

let list = new LinkedList()
list.insertAtHead(43) // 43
list.insertAtHead(50) // 50->43
list.insertAtHead(34) // 34->50->43
list.insertAt(2, 46) // 34->50->46->43
list.removeAtHead() // 50->46->43
list.removeElement(46) // 50->43
list.reverse() // 43->50
console.log(list.isCycle()) // false
console.log(list.middleNode()) // 50
console.log(list.searchElement(50)) //1
console.log(list.print()) // 43->50
```

## Practice Questions:

1. [Middle of Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
2. [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
3. [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
4. [Remove Duplicates from Sorted list I](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)
5. [Remove Duplicates from Sorted list II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)
6. [Linked List Cycle I](https://leetcode.com/problems/linked-list-cycle/)
7. [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)
8. [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)
9. [Next Greater Node in Linked List](https://leetcode.com/problems/next-greater-node-in-linked-list/)
10. [Remove Zero Consecutive Nodes from Linked List](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/)
11. [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)
12. [Odd Even Linked list](https://leetcode.com/problems/odd-even-linked-list/)
13. [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)
14. [Reorder List](https://leetcode.com/problems/reorder-list/)
15. [Remove Nth Node from End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
16. [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

**Note**: You can find solutions of all these problems in [this playlist](https://www.youtube.com/playlist?list=PLSH9gf0XETourRyZW56Rdh9e0Phx-AJM5)

Before checking the solutions, challenge yourself to solve the problems on your own. If you're stuck, watch the solution video up to the intuition part. Then, code it yourself before watching the complete solution. 

This approach builds solid problem-solving skills.
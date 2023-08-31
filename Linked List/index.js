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

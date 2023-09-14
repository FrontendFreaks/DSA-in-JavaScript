# Queue in JavaScript

<p align="center">
  <a href="https://youtu.be/Pq_D3wiN4k8">
  <img src="https://img.youtube.com/vi/Pq_D3wiN4k8/0.jpg" alt="Queue in JavaScript" />
  </a>
</p>

## Queue Implementation Using Array

```javascript
class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(data){
        this.queue.push(data)
    }

    dequeue(){
        return this.isEmpty() ? null : this.queue.shift()
    }

    front(){
        return this.isEmpty() ? null : this.queue.at(0)
    }

    back(){
        return this.isEmpty() ? null : this.queue.at(-1)
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    size(){
        return this.queue.length
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.dequeue()) // 1
console.log(queue.front()) // 2
console.log(queue.back()) // 3
console.log(queue.isEmpty()) // false
console.log(queue.size()) // 2
console.log(queue) // Queue { queue: [2, 3]}
```


## Queue Implementation Using Linked List

```javascript
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class QueueLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data){
        const newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
        } else{
            this.tail.next = newNode;
        }
        
        this.tail = newNode;
        this.size++;
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        }

        const deletedItem = this.head.data;
        this.head = this.head.next;
        this.size--;
        return deletedItem;
    }

    front(){
        return this.isEmpty() ? null : this.head.data;
    }

    back(){
        return this.isEmpty() ? null : this.tail.data;
    }

    isEmpty(){
        return this.size === 0;
    }
}

const queue1 = new QueueLinkedList()
queue1.enqueue(5)
queue1.enqueue(6)
queue1.enqueue(7)
console.log(queue1.dequeue()) // 5
console.log(queue1.front()) // 6
console.log(queue1.back()) // 7
console.log(queue1.size) // 2
console.log(queue1) 
/* QueueLinkedList 
{ 
    head: Node { data: 6, next: Node { data: 7, next: null }}, 
    tail: Node{data: 7, next: null}, 
    size: 2
}
*/
```

## Implement Queue Using Stacks

```javascript
class QueueStack{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    push(x){
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop())
        }

        this.stack1.push(x);

        while(this.stack2.length > 0){
            this.stack1.push(this.stack2.pop())
        }
    };

    pop(){
        if(this.empty()){
            return null;
        }

        return this.stack1.pop()
    };

    peek(){
        return this.empty() ? null : this.stack1.at(-1)
    };

    empty(){
        return this.stack1.length === 0
    };
}
```

## Implement Circular Queue Using Linked List

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class MyCircularQueue {
    constructor(k) {
        this.capacity = k;
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enQueue(data) {
        if(this.isFull()){
            return false;
        }

        const newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
        } else{
            this.tail.next = newNode;
        }
        
        this.tail = newNode;
        this.tail.next = this.head;
        this.size++;
        return true;
    }

    deQueue() {
        if(this.isEmpty()){
            return false;
        }

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else{
            this.head = this.head.next;
            this.tail.next = this.head;
        }

        this.size--;
        return true;
    }

    Front() {
        return this.isEmpty() ? -1 : this.head.data;
    }

    Rear() {
        return this.isEmpty() ? -1 : this.tail.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }
}
```

## Practice Questions

1. [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)
2. [Implement Stacks using Queue](https://leetcode.com/problems/implement-stack-using-queues/)
3. [Design Circular Queue](https://leetcode.com/problems/design-circular-queue/)
4. [Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/)
5. [Design Circular Deque](https://leetcode.com/problems/design-circular-deque/)
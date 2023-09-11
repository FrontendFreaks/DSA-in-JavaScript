# Stack In JavaScript

<p align="center">
  <a href="https://youtu.be/6RbtTNUTKVU">
  <img src="https://img.youtube.com/vi/6RbtTNUTKVU/0.jpg" alt="Stack in JavaScript" />
  </a>
</p>

## Stack Implementation Using Array
```javascript
class Stack{
    constructor(){
        this.stack = []
    }

    push(item){
        this.stack.push(item)
    }

    pop(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack.pop()
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack[this.stack.length - 1]
    }

    isEmpty(){
        return this.stack.length === 0
    }

    size(){
        return this.stack.length;
    }
}

const stack = new Stack()
stack.push(10)
stack.push(12)
stack.push(13)
stack.push(15)
stack.push(17)
stack.pop()
console.log(stack.peek())
console.log(stack)
```

## Stack Implementation Using Linked List

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackLinkedList {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return "List is already empty"
        }
        const item = this.top.data;
        this.top = this.top.next;
        this.size--;
        return item;
    }

    peek(){
        return this.top.data;
    }

    isEmpty() {
        return this.size === 0;
    }
}

const stack1 = new StackLinkedList()
stack1.push(10)
stack1.push(12)
stack1.push(14)
console.log(stack1.pop())
console.log(stack1.peek())
console.log(stack1)
```

## Practice Questions

1. [Remove All Adjacent Duplicate in String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)
2. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
3. [Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/)
4. [Next Greater Element 1](https://leetcode.com/problems/next-greater-element-i/)
5. [Online Stock Span](https://leetcode.com/problems/online-stock-span/)
6. [Next Greater Element 2](https://leetcode.com/problems/next-greater-element-ii/)
7. [Remove K Digits](https://leetcode.com/problems/remove-k-digits/)
8. [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/)

**Note**: You can find solutions of all these problems in [this playlist](https://www.youtube.com/playlist?list=PLSH9gf0XETotSpywVcJGIYODBNL_j0P0u)

Before checking the solutions, challenge yourself to solve the problems on your own. If you're stuck, watch the solution video up to the intuition part. Then, code it yourself before watching the complete solution. 

This approach builds solid problem-solving skills.
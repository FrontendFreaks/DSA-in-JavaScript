# Map, WeakMap, Set, WeakSet in JavaScript

<p align="center">
  <a href="https://youtube.com/live/oxpVW_HSqvM">
  <img src="https://img.youtube.com/vi/oxpVW_HSqvM/0.jpg" alt="Set & Map In JavaScript" />
  </a>
</p>

## Set in JavaScript:

```javascript
// Creating a Set
const mySet = new Set();

// Adding values to the Set
mySet.add(1);
mySet.add("hello");
mySet.add(true);

// Checking if a value exists
console.log(mySet.has(1)); // true

// Removing a value
mySet.delete("hello");

// Iterating through the Set
for (const value of mySet) {
    console.log(value);
}

// Size of the Set
console.log(mySet.size); // 2

// Clearing the Set
mySet.clear();
```

## Map in JavaScript

```javascript
// Creating a Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "Vishal");
myMap.set("age", 21);

// Getting a value using a key
console.log(myMap.get("name")); // Vishal

// Checking if a key exists
console.log(myMap.has("age")); // true

// Removing a key-value pair
myMap.delete("age");

// Iterating through the Map
for (const [key, value] of myMap) {
    console.log(key, value);
}

// Size of the Map
console.log(myMap.size); // 1

// Clearing the Map
myMap.clear();
```

## Weak Map in JavaScript

```javascript
let obj = { key: 'value' };

// Creating a WeakMap
let weakMap = new WeakMap();
weakMap.set(obj, 'metadata');

// Checking if the object still exists in the WeakMap
console.log(weakMap.has(obj)); // true

// Removing the strong reference to the object
obj = null;

// At this point, the object is no longer strongly referenced
// The WeakMap's weak reference will allow the object to be garbage collected
console.log(weakMap.has(obj)); // false
```

## Practice Questions:

1. [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
2. [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/) (LeetCode 349)
3. [Distribute Candies](https://leetcode.com/problems/distribute-candies/)
4. [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) (LeetCode 128)
5. [Happy Number](https://leetcode.com/problems/happy-number/)
6. [First Unique Character In A String](https://leetcode.com/problems/first-unique-character-in-a-string/)
7. [Find Common Characters](https://leetcode.com/problems/find-common-characters/)
8. [Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/)
9. [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)
10. [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)
11. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
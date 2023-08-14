# Searching in JavaScript

<p align="center">
  <a href="https://youtu.be/7aLKVYpYugQ">
  <img src="https://img.youtube.com/vi/7aLKVYpYugQ/0.jpg" alt="Searching Algorithms in JavaScript" />
  </a>
</p>

### Linear Search in JavaScript

```javascript
const arr = [1, 2, 6, 9, 0, -5];

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr, 8));
console.log(arr.includes(9));
console.log(arr.indexOf(9));
console.log(arr.find((num) => num > 0));
console.log(arr.findIndex((num) => num < 0));
```

### Binary Search In JavaScript

```javascript
const BinarySearch = (arr, target) => {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        else if (arr[mid] > target) {
            end = mid - 1;
        }

        else {
            start = mid + 1;
        }
    }

    return -1;
}

console.log(BinarySearch([1, 4, 6, 9, 12, 15], 8));
```

### Binary Search using Recursion

```javascript
const BinarySearchRecur = (arr, target) => {
    return BinarySearchUtil(arr, target, 0, arr.length);
}

const BinarySearchUtil = (arr, target, start, end) => {
    if (start > end)
        return -1;

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    else if (arr[mid] > target) {
        return BinarySearchUtil(arr, target, start, mid - 1);
    }

    else {
        return BinarySearchUtil(arr, target, mid + 1, end);
    }
}
```

### Find floor and ceil value of X in an array 

```javascript
const floorCeil = (arr, target) => {
    let start = 0, end = arr.length;
    let floor = -1, ceil = -1;
    while(start <= end){
        let mid = Math.floor((start + end)/2);

        if(arr[mid] === target){
            floor = mid;
            ceil = mid;
            return [ceil, mid]
        }

        else if(arr[mid] > target){
            ceil = mid;
            end = mid - 1;
        }

        else {
            floor = mid;
            start = mid + 1;
        }
    }

    return [ceil, floor]
}
```

## Practice Questions

### Level 1
- [Sqrt(x)](https://leetcode.com/problems/sqrtx/)
- [First Bad Version](https://leetcode.com/problems/first-bad-version)
- [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
- [Binary Search](https://leetcode.com/problems/binary-search)
- [Search Insert Position](https://leetcode.com/problems/search-insert-position)
- [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array)

### Level 2
- [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array)
- [Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/)
- [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
- [Find Peak Element](https://leetcode.com/problems/find-peak-element)
- [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array)

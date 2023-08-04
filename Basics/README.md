# Practise Loop, functions & Math Problems
<p align="center">
  <a href="https://youtu.be/MLVJWmG2iYI">
  <img src="https://img.youtube.com/vi/MLVJWmG2iYI/0.jpg" alt="Loops in JavaScript | Math Interview Problems Solved" />
  </a>
</p>

### Question 1: Sum of all natural numbers from 1 to n

```javascript
function sumOfNaturalNumber(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfNaturalNumber(5)); // 15
console.log(sumOfNaturalNumber(10)); // 55
console.log(sumOfNaturalNumber(8)); // 36
```

### Question 2: Sum of digits of a number

```javascript
function sumOfDigits(num){
    let sum = 0;
    while(num > 0){
        sum += num%10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumOfDigits(1287)); // 18
```

### Question 3: Count the number of digits of a number

```javascript
function countDigits(num){
    num = Math.abs(num);
    let count = 0;
    do {
        count++;
        num = Math.floor(num / 10);
    } while (num > 0);
    return count;
}

console.log(countDigits(121)); // 3
console.log(countDigits(-1211413131)); // 10
```

### Question 4: Check if a number is palindrome

```javascript
let isPalindrome = function(x) {
    let copyNum = x, reverseNum = 0;

    while(copyNum > 0){
        const lastDigit = copyNum % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        copyNum = Math.floor(copyNum / 10);
    }

    return x === reverseNum;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(1234)); // false
```

### Question 5: Find nth Fibonacci number
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
such that each number is the sum of the two preceding ones, starting from 0 and 1.

```javascript
let fib = function(n) {
    if(n < 2){
        return n;
    }

    let prev = 0, curr = 1, next;
    for(let i=2; i<= n; i++){
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return next;
};

// Fibonacci Sequence: 0 1 1 2 3 5 8...
console.log(fib(5)); // 5
console.log(fib(10)); // 55
```

### Question 6: Missing Number in an Array
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.
```javascript
let missingNumber = function(nums) {
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
    }
    return nums.length*(nums.length+1)/2 - sum;
};

// One Line Solution: 
let missingNumber = (nums) => nums.length*(nums.length+1)/2 - nums.reduce((acc, num) => num + acc);

console.log(missingNumber([3,0,1])); // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
```

## Practice Questions

- [Count Odd Numbers in an Interval Range](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)
- [Fizz Buzz](https://leetcode.com/problems/fizz-buzz/)
- [Power of Two](https://leetcode.com/problems/power-of-two/)
- [Find Square root of a Number](https://leetcode.com/problems/sqrtx/)
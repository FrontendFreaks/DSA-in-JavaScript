/*
Question 1: sum of all natural numbers from 1 to n

sum of 1 to 5: 15
*/

function sumOfNaturalNumber(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfNaturalNumber(5)) //15
console.log(sumOfNaturalNumber(10)) //55
console.log(sumOfNaturalNumber(8)) //36


/*
Question 2: Sum of digits of a number

1287: 1+2+8+7 = 18

*/

function sumOfDigits(num){
    let sum = 0;
    while(num > 0){
        sum += num%10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumOfDigits(1287)) //18

/*
Question 3: count the number of digits of a number
34252: 5
-121 = 3
*/

function countDigits(num){
    num = Math.abs(num);
    let count = 0;
    do {
        count++;
        num = Math.floor(num / 10);
    } while (num > 0);
    return count;
}

console.log(countDigits(121)) //3
console.log(countDigits(-1211413131)) //10

/*
Question 4: Given an integer x, return true if x is a palindrome, and false otherwise.

A palindrome number is a number that remains the same when digits are reversed
*/

let isPalindrome = function(x) {
    let copyNum = x, reverseNum = 0;

    while(copyNum > 0){
        const lastDigit = copyNum%10;
        reverseNum = reverseNum*10 + lastDigit;
        copyNum = Math.floor(copyNum/10)
    }

    return x === reverseNum
};

console.log(isPalindrome(121)) //true
console.log(isPalindrome(1234)) //false

/*
Question 5: Find nth fibonacci number

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1

Fibonacci Sequence: 0 1 1 2 3 5 8...
*/

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

console.log(fib(5)) // 5
console.log(fib(10)) //55

/*
Question 6: Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
*/

let missingNumber = function(nums) {
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
    }
    return nums.length*(nums.length+1)/2 - sum;
};

/*
One Line Solution: 

let missingNumber = (nums) => nums.length*(nums.length+1)/2 - nums.reduce((acc, num) => num + acc);
*/

console.log(missingNumber([3,0,1])) //2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])) //8
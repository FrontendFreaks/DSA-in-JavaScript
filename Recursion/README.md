# Recursion in JavaScript

<p align="center">
  <a href="https://youtu.be/5J07qXtAPb4">
  <img src="https://img.youtube.com/vi/5J07qXtAPb4/0.jpg" alt="Recursion in JavaScript" />
  </a>
</p>

### Factorial of a Number

```javascript
function factorial(n){
    if(n === 0)
        return 1;
    return n * factorial(n - 1);
}

console.log(factorial(8));
```

### Sum of Array

```javascript
function sumOfArrays(arr, n){
    if(n === 0){
        return 0;
    }

    return arr[n - 1] + sumOfArrays(arr, n - 1);
}

console.log(sumOfArrays([1, 2, 3, 4, 5], 5));
```

### Fibonacci Number

```javascript
function fibo(n){
    if(n < 2){
        return n;
    }
    return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(5));
```

## Practice Questions (solve using recursion):

- Check whether a string is palindrome or not
- Create pow(x, n) function which returns x^n
- Create a function which returns the sum of digits of a number (e.g., sumOfDigits(453) is 12)
- Create a function which returns the number of digits in a number (e.g., countDigits(453) is 3)
- Create a function to find the LCM of two numbers
- Create a function to find the GCD of two numbers
- Create a function to reverse a string

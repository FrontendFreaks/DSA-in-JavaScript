// Sorting In JavaScript

// Sort an Array
const arr = [-2, -7, 1000, 5]
console.log(arr.sort((a, b) => a - b))
console.log(arr.sort((a, b) => b - a))

const strArr = ["mango", "apple", "banana"]
console.log(strArr.sort())

// Sort a String
const str = "Vishal"

// Ascii value of A = 65 & a = 97
console.log(str.split("").sort().join(""))

// Bubble Sort In JavaScript

const bubbleSort = (arr) => {
    let swapped, swapCount = 0;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // let temp = arr[i];
                // arr[i] = arr[i+1];
                // arr[i+1] = temp;
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swapped = true;
                swapCount++;
            }
        }
    } while (swapped)
    console.log(swapCount)
    return arr;
}

console.log(bubbleSort(arr))

// Selection sort in JavaScript

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
    return arr;
}

console.log(selectionSort(arr))

// Insertion Sort In JavaScript

const insertionSort = (arr) => {
    for(let i=1; i<arr.length; i++){
        let current = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}

console.log(insertionSort(arr))


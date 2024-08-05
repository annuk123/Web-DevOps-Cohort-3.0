//Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS


//Concepts 
//1. Array
//Array is a collection of elements. It can store any type of data.
//Array is a reference type. It is an object.
//Array is a global object in JS.
//2. Filter
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

function evenValues(arr){
    return arr.filter(num => num % 2 === 0);
}

// console.log(evenValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2, 4, 6, 8, 10]
// console.log(evenValues([1, 3, 5, 7, 9])); // []

let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(evenValues(Arr)); // [2, 4, 6, 8, 10]
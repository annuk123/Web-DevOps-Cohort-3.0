//Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(1, 2));
console.log(sum('1', '2'));
console.log(sum('1', 2));
console.log(sum(1, '2'));
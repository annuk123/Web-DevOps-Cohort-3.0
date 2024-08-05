//Write a function called sum that finds the sum from 1 to a number.

function sum(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

console.log(sum(5));
console.log(sum(10)); 
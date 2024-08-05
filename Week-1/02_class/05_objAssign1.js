//Write a function that takes a user as an input and greets them with their name and age.

function greet(user){
    console.log(`Hello ${user.name}, you are ${user.age} years old.`);
}

let user = {
    name: 'John',
    age: 30
};
// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greet(user){
    console.log(`Hello Mrs. ${user.name}, you age is ${user.age}.`);
}

let user = {
    name: 'Annu',
    age: 21
};

greet(user);
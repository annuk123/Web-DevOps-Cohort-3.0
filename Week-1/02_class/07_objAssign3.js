// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

//Question3:
//Also tell the user if they are legal to vote or not

function greet(user){
    if(user.age > 18){
        console.log(`Hello Mrs. ${user.name}, you age is ${user.age}. You are eligible to vote.`);
    }
    else{
       console.log(`Hello Mrs. ${user.name}, your age is ${user.age}. You are not eligible to vote.`);
    }
}

let user = {
    name: 'Annu',
    age: 10
};

greet(user);
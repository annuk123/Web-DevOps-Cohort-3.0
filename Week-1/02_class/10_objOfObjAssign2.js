//create a function that takes an array of objects as input, and return the user whose age>18 and male.
    //initialize a new array, push to a new array
    // you can use filter function inside array, map, reduce.

//Concepts
//1. Map: The map() method creates a new array with the results of calling a provided function on every element in the calling array.

function ageGender(user){
    return user.filter( obj => obj.age > 18 && obj.male === true);
    // return user.map( obj => obj.age > 18 && obj.male === true);
//     return user.reduce( obj => obj.age > 18 && obj.male === true);
 }

let users = [
    {
        name: 'Annu',
        age: 21,
        female: true
    },
    {
        name: 'John',
        age: 15,
        male: true
    },
    {
        name: 'Mike',
        age: 25,
        male: true
    }
];
console.log(ageGender(users)); // [ {
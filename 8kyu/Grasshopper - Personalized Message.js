//https://www.codewars.com/kata/5772da22b89313a4d50012f7
//Grasshopper - Personalized Message

function greet (name, owner) {
    console.log(name, owner);
    if (name === owner) return 'Hello boss';
    else return 'Hello guest';
}
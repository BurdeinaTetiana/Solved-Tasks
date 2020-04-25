//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
//Abbreviate a Two Word Name

function abbrevName(n){
    let str = '';
    for (let i = 0; i < n.length; i++){
        if (n[i] === ' ') str += n[0].toUpperCase() + '.' + n[i + 1].toUpperCase();
    }
    return str;
}
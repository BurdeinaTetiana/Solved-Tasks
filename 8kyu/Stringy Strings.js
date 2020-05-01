//https://www.codewars.com/kata/563b74ddd19a3ad462000054

//Stringy Strings

function stringy(size) {
    let str = '';
    for (let i = 1; i <= size; i++){
        if (i % 2 ) str += '1';
        else str += '0';
    }
    return str;
}
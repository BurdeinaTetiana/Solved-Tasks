//https://www.codewars.com/kata/56b1f01c247c01db92000076
//Double Char
function doubleChar(str) {
    let strNuw = '';
    for (let i = 0; i < str.length; i++){
        strNuw+= str[i] + str[i];
    }
    return strNuw;
}
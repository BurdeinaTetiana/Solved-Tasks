//https://www.codewars.com/kata/596fba44963025c878000039

//Contamination #1 -String-

function contamination(text, char){
    if (text === '' || char === '') return '';
    let str = '';
    for (let i = 0; i < text.length; i++){
        str += char;
    }
    return str;
}